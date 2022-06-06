const request = require('supertest');
const Server = require('../models/server.model');
const { User } = require('../models');
const { Types } = require('mongoose');
const { dbConnect, dbDisconnect } = require('./db.js');
const {
    userTeacher,
    userStudent1,
    userStudent2,
    userAdmin,
    userAdmin2,
} = require('./user.data.js');

require('dotenv').config();
process.env.INTERACT_DB = process.env.INTERACT_DB_TEST;
const server = new Server();
const app = server.app;

jest.setTimeout(200000);
beforeAll(async () => await dbConnect());
afterAll(async () => await dbDisconnect());

let users = [userStudent1, userStudent2, userTeacher, userAdmin];
let userTest = userTeacher;

describe('GET users', () => {
    it('Should respond with all users', async () => {
        const response = await request(app).get('/api/v1/user');
        expect(response.body.data.total).toBe(await User.countDocuments());
        expect(response.body.data.user[0]).toHaveProperty('fullName');
        expect(response.body.data.user[0]).toHaveProperty('email');
        expect(response.statusCode).toBe(200);
    });
});

describe('User Post', () => {
    let token = '';
    describe('If the user is admin', () => {
        it('Should return post the new user', async () => {
            const res = await request(app)
                .post('/api/v1/auth/login')
                .send(userAdmin);
            expect(res.body.data).toHaveProperty('token');

            token = res.body.data.token;
            const responsePost = await request(app)
                .post('/api/v1/user')
                .set({ xtoken: token })
                .send(userTest);
            expect(responsePost.body.data).toHaveProperty('user');
            expect(responsePost.body.data.user).toHaveProperty('uid');
            expect(responsePost.body.data.user).toHaveProperty(
                'email',
                userTest.email
            );
            expect(responsePost.body.data.user).toHaveProperty(
                'fullName',
                userTest.fullName
            );
            expect(responsePost.body.data.user).toHaveProperty('status', true);
            expect(responsePost.body.data.user).toHaveProperty(
                'role',
                userTest.role
            );
        });
    });

    describe('If the user is not admin', () => {
        it('Should return error Access denied', async () => {
            const res = await request(app)
                .post('/api/v1/auth/login')
                .send(userTest);
            expect(res.body.data).toHaveProperty('token');
            token = res.body.data.token;
            const responsePost = await request(app)
                .post('/api/v1/user')
                .set({ xtoken: token })
                .send(userTest);
            expect(responsePost.body.error).toBe(
                `Access denied. ${userTest.fullName} is not admin`
            );
        });
    });
});
