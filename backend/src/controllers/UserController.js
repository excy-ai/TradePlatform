'use strict';

const {User} = require('../models');

const getAllUsers = async ctx => {
    const users = await User.findAll();
    ctx.res.ok(users);
};

const getMe = async ctx => {
    ctx.params.id = ctx.state.user.id;
    return getUserById(ctx);
};

const getUserById = async ctx => {
    const userId = +ctx.params.id;

    const user = await User.findOne({where: {id: userId}});

    if (user) {
        let result;
        if (ctx.isAuthenticated()) {
            result = {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            }
        }
        ctx.res.ok(result);
    } else {
        ctx.res.notFound();
    }
};

module.exports = {getAllUsers, getMe, getUserById};