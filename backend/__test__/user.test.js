const request = require('supertest');
const Server = require('../models/server.model');
const { User } = require('../models');
const { Types } = require('mongoose');
const { dbConnect, dbDisconnect } = require('./db.js');

jest.setTimeout(200000);

require('dotenv').config();
process.env.INTERACT_DB = process.env.INTERACT_DB_TEST;
const server = new Server();
const app = server.app;
beforeAll(async () => await dbConnect());
afterAll(async () => await dbDisconnect());

const userStudent1 = {
    fullName: 'camilo',
    email: 'student1@test.com',
    password: '123456',
    courses: [],
    role: 'student',
};

const userStudent2 = {
    fullName: 'daniel',
    email: 'student2@test.com',
    password: '123456',
    courses: [],
    role: 'student',
};

const userTeacher = {
    fullName: 'oscar',
    email: 'teacher@test.com',
    password: '123456',
    courses: [],
    role: 'teacher',
};

const userAdmin = {
    email: 'admin@test.com',
    password: '123456',
};

const userAdmin2 = {
    fullName: 'admin-2',
    email: 'admin2@test.com',
    password: '123456',
    courses: [],
    role: 'admin',
};
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
            expect(res.body).toHaveProperty('token');
            token = res.body.token;
            const responsePost = await request(app)
                .post('/api/v1/user')
                .set({ xtoken: token })
                .send(userTest);
            expect(responsePost.body).toHaveProperty('user');
            expect(responsePost.body.user).toHaveProperty('uid');
            expect(responsePost.body.user).toHaveProperty(
                'email',
                userTest.email
            );
            expect(responsePost.body.user).toHaveProperty(
                'fullName',
                userTest.fullName
            );
            expect(responsePost.body.user).toHaveProperty('status', true);
            expect(responsePost.body.user).toHaveProperty(
                'role',
                userTest.role
            );
        });
    });

    describe('If the user is not admin', () => {
        it('Should return Access denied', async () => {
            const res = await request(app)
                .post('/api/v1/auth/login')
                .send(userTest);
            expect(res.body).toHaveProperty('token');
            token = res.body.token;
            const responsePost = await request(app)
                .post('/api/v1/user')
                .set({ xtoken: token })
                .send(userTest);
            expect(responsePost.body.msg).toBe(
                `Access denied. ${userTest.fullName} is not admin`
            );
        });
    });
});
