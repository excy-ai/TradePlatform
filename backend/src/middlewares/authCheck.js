'use strict';

async function authCheck(ctx, next) {
  if (ctx.isAuthenticated()) {
    await next();
  } else {
    ctx.response.status = 401;
    ctx.response.body = 'Unauthenticated';
    return ctx.response;
  }
}

async function unauthCheck(ctx, next) {
  if (ctx.isUnauthenticated()) {
    await next();
  } else {
    ctx.response.status = 400;
    return ctx.response;
  }
}

module.exports = { authCheck, unauthCheck };
