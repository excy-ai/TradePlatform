'use strict';

const bcrypt = require('bcrypt');
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models');

const SALT_ROUNDS = 10;

passport.serializeUser(async (user, done) => {
    try {
        if (!user) {
            return done(null, false);
        }
        return done(null, user.id);
    } catch (err) {
        return done(err);
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({where: {id}});
        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
});

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: true,
    passReqToCallback: true
}, login));

async function login(ctx, email, password, done) {
    const user = await User.findOne({where: {email}});
    if (user) {
        const result = await bcrypt.compare(password, user.password);
        if (result === true) {
            ctx.response.status = 200;
            return done(null, user);
        } else {
            return done('Incorrect password');
        }
    } else {
        return done('User not found');
    }
}

async function signin(ctx, next) {
    await passport.authenticate('local.signin', async (err, user, info, status) => {
        if (!err && user) {
            await ctx.login(user);
            const userDataResponse = await {
                id: user.id,
                email: user.email
            };
            ctx.response.body = userDataResponse;
            ctx.response.status = 200;
            return ctx.response;
        } else {
            ctx.response.body = err || info && info.message;
            ctx.response.status = status;
            return ctx.response;
        }

        await next();
    })(ctx, next);
}

async function signup(ctx) {
    try {
        const userData = ctx.request.body;
        const [email, password] = [userData.email, userData.password];

        if (await User.findOne({where: {email}})) {
            ctx.response.body = "User with such email already exists";
            ctx.response.status = 400;
            return ctx.response;
        }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = {
            email: email,
            password: hashedPassword,
            firstName: userData.firstName,
            lastName: userData.lastName,
        };

        const createdUser = await User.create(newUser);
        if (createdUser) {
            ctx.response.body = createdUser;
            ctx.response.status = 204;
            return ctx.response;
        }
        ctx.response.body = "NOT FOUND";
        ctx.response.status = 404;
        return ctx.response;
    } catch (err) {
        ctx.response.body = "Error creating new user";
        ctx.response.status = 400;
        return ctx.response;
    }
}

async function signout(ctx) {
    try {
        ctx.logout();
        ctx.response.status = 200;
        return ctx.response;
    } catch (err) {
        ctx.response.status = 400;
        return ctx.response;
    }
}

module.exports = {passport, signin, signup, signout};