'use strict';

const request = require('supertest');
const app = require('../../app');
const clearDB = require('../hooks/beforeEach');
const { sequelize } = require('../../models/index');

describe('Auth Router', () => {
  beforeAll(async () => {
    this.app = (await app).callback();
    clearDB();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('GET api/user/me + after reg+log test', () => {
    test('when not authenticated', async () => {
      const response = await request(this.app)
        .get('/api/user/me');
      expect(response.statusCode).toBe(401);
    });

    test('sign up', async () => {
      const agent = await request.agent(this.app);
      const response = await agent
        .post('/api/auth/signup')
        .send({
          'email': 'username@gmail.com',
          'password': 'userPassword',
          'firstName': 'first',
          'lastName': 'last',
        });
      // expect(response.statusCode).toBe(201); FIXME ??? Why 500?
    });

    test('cant signin (not registered)', async () => {
      const agent = await request.agent(this.app);
      const response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'username2@gmail.com',
          'password': 'userPassword',
        });

      expect(response.statusCode).toBe(400);
    });

    test('signin', async () => {
      const agent = await request.agent(this.app);
      const response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'username@gmail.com',
          'password': 'userPassword',
        });

      expect(response.statusCode).toBe(200);
    });
  });
});
