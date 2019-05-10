'use strict';

const request = require('supertest');
const app = require('../../app');
const clearDB = require('../hooks/beforeEach');
const { sequelize } = require('../../models/index');
describe('Item Router', () => {
  beforeAll(async () => {
    this.app = (await app).callback();
    clearDB();
    const agent = await request.agent(this.app);
    await agent
      .post('/api/auth/signup')
      .send({
        'email': 'username@gmail.com',
        'password': 'userPassword',
        'firstName': 'first',
        'lastName': 'last',
      });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('get user info', () => {
    test('get info', async () => {
      const agent = await request.agent(this.app);
      let response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'username@gmail.com',
          'password': 'userPassword',
        });
      expect(response.statusCode).toBe(200);
      let id = response.body.id;
      console.log(response.body);
      response = await agent
        .get(`/api/user/info?id=${id}`);
      expect(response.statusCode).toBe(200);
    });
  });
});
