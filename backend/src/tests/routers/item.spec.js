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

  describe('test item add/get categorys', () => {
    test('add item', async () => {
      const agent = await request.agent(this.app);
      let response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'username@gmail.com',
          'password': 'userPassword',
        });
      expect(response.statusCode).toBe(200);
      response = await agent
        .post('/api/user/items/add')
        .send({
          'sign': 'sign',
          'description': 'description',
          'category': 'immortal',
        });
      expect(response.statusCode).toBe(200);
    });
    test('add item bad request', async () => {
      const agent = await request.agent(this.app);
      let response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'username@gmail.com',
          'password': 'userPassword',
        });
      expect(response.statusCode).toBe(200);
      response = await agent
        .post('/api/user/items/add')
        .send({
          'sign': 'sign',
          'description': 'description',
          'category': 'sss',
        });
      expect(response.statusCode).toBe(400);
    });
    test('get categorys', async () => {
      const agent = await request.agent(this.app);

      const response = await agent
        .get('/api/user/items/categorys');
      expect(response.body.length).toBe(6);
      expect(response.statusCode).toBe(200);
    });
  });
  describe('test item add/get categorys unauth', () => {
    test('add item', async () => {
      const agent = await request.agent(this.app);
      const response = await agent
        .post('/api/user/items/add')
        .send({
          'sign': 'sign',
          'description': 'description',
          'category': 'immortal',
        });
      expect(response.statusCode).toBe(401);
    });
    test('get categorys', async () => {
      const agent = await request.agent(this.app);

      const response = await agent
        .get('/api/user/items/categorys');
      expect(response.body.length).toBe(6);
      expect(response.statusCode).toBe(200);
    });
  });
});
