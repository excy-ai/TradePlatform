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
    //1st User
    let response = await agent
      .post('/api/auth/signup')
      .send({
        'email': 'firstUser@gmail.com',
        'password': 'firstUserPass',
        'firstName': 'first',
        'lastName': 'first',
      });
    expect(response.statusCode).toBe(201);
    //2nd User
    response = await agent
      .post('/api/auth/signup')
      .send({
        'email': 'secondUser@gmail.com',
        'password': 'secondUserPass',
        'firstName': 'second',
        'lastName': 'second',
      });
    expect(response.statusCode).toBe(201);
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('offer send', () => {
    test('send success', async () => {
      const agent1 = await request.agent(this.app);
      ////////////////1st
      let response = await agent1
        .post('/api/auth/signin')
        .send({
          'email': 'firstUser@gmail.com',
          'password': 'firstUserPass',
        });
      let firstUserId = response.body.id;
      expect(response.statusCode).toBe(200);
      response = await agent1
        .post('/api/user/items/add')
        .send({
          'sign': 'sign1',
          'description': 'description',
          'category': 'immortal',
        });
      expect(response.statusCode).toBe(200);
      let firstUserItem = response.body;
      ////////////////2nd
      const agent2 = await request.agent(this.app);
      response = await agent2
        .post('/api/auth/signin')
        .send({
          'email': 'secondUser@gmail.com',
          'password': 'secondUserPass',
        });
      let secondUserId = response.body.id;
      expect(response.statusCode).toBe(200);
      response = await agent2
        .post('/api/user/items/add')
        .send({
          'sign': 'sign2',
          'description': 'description',
          'category': 'immortal',
        });
      let secondUserItem = response.body;
      expect(response.statusCode).toBe(200);
      //switch item status
      response = await agent2
        .post('/api/user/items/trade/switchStatus')
        .send({ id: secondUserItem.Id });
      ////////////////offer
      response = await agent1
        .post(`/api/offers/create`)
        .send({
          target: secondUserId,
          targetItem: secondUserItem.Id,
          offeredItem: firstUserItem.Id,
        });

      expect(response.statusCode).toBe(200);
    });

    test('send error', async () => {
      const agent = await request.agent(this.app);
      let response = await agent
        .post('/api/auth/signin')
        .send({
          'email': 'secondUser@gmail.com',
          'password': 'secondUserPass',
        });
      expect(response.statusCode).toBe(200);
    });
  });
});
