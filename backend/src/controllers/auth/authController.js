"use strict";

const bcrypt = require("bcrypt");
const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;
const { User, Item } = require("../../models");

const SALT_ROUNDS = 10;
const PASS_MIN_LENGTH = 8;

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
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: true,
      passReqToCallback: true
    },
    login
  )
);

async function login(ctx, email, password, done) {
  const user = await User.findOne({ where: { email } });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result === true) {
      ctx.response.status = 200;
      return done(null, user);
    } else {
      ctx.response.status = 400;
      return done("Incorrect password");
    }
  } else {
    ctx.response.status = 404;
    return done("User not found");
  }
}

async function signin(ctx, next) {
  await passport.authenticate(
    "local.signin",
    async (err, user, info, status) => {
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
        ctx.response.body = "cant sign in with given params";
        ctx.response.status = 400;
        return ctx.response;
      }

      await next();
    }
  )(ctx, next);
}

async function signup(ctx) {
  try {
    const userData = ctx.request.body;
    const [email, password] = [userData.email, userData.password];
    if (!isValidMail(email)) {
      ctx.throw(400, "invalid email");
    }
    if (password.length < PASS_MIN_LENGTH) {
      ctx.throw(400, "password must be more than 8 symbols");
    }
    if (await User.findOne({ where: { email } })) {
      ctx.throw(400, "User with such email already exists");
    }

    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    if (userData.firstName === "" || userData.lastName === "") {
      ctx.throw(400, "Bad first/lastName fields");
    }
    const newUser = {
      email: email,
      password: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName
    };
    const createdUser = await User.create(newUser);
    if (createdUser) {
      ctx.response.body = createdUser;
      ctx.response.status = 201; //TODO: in prod change to 204
      return ctx.response;
    }
    ctx.throw(404, "not found");
  } catch (err) {
    ctx.response.body = err.message;
    ctx.response.status = err.status;
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

function isValidMail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

module.exports = { passport, signin, signup, signout };
