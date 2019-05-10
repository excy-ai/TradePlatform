'use strict';

const request = require('supertest');
const app = require('../../app');
const clearDB = require('../hooks/beforeEach');
const { sequelize } = require('../../models/index');
const sendOffer = async (agent1, agent2) => {
  let response = await agent1
    .post('/api/auth/signin')
    .send({
      'email': 'firstUser@gmail.com',
      'password': 'firstUserPass',
    });
  let firstUserId = response.body.id;
  response = await agent1
    .post('/api/user/items/add')
    .send({
      'sign': 'sign1',
      'description': 'description',
      'category': 'immortal',
    });
  let firstUserItem = response.body;
  ////////////////2nd
  response = await agent2
    .post('/api/auth/signin')
    .send({
      'email': 'secondUser@gmail.com',
      'password': 'secondUserPass',
    });
  let secondUserId = response.body.id;
  response = await agent2
    .post('/api/user/items/add')
    .send({
      'sign': 'sign2',
      'description': 'description',
      'category': 'immortal',
    });
  let secondUserItem = response.body;
  //switch item status
  await agent2
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
  return response;
};
describe('offerHandle Router', () => {
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

  describe('offer handling', () => {
    test('send success & rejected', async () => {
      const agent1 = await request.agent(this.app);
      ////////////////1st
      const agent2 = await request.agent(this.app);
      let response = await sendOffer(agent1, agent2);
      expect(response.statusCode).toBe(200);
      response = await agent2.patch(`/api/offers/${response.body.id}/reject`);
      expect(response.statusCode).toBe(204);
    });
  });
});
