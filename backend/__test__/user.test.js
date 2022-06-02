const request = require('supertest')
const Server = require('../models/server.model')
const {User} = require('../models');
const {Types} = require('mongoose');


jest.setTimeout(200000)

require('dotenv').config()
process.env.INTERACT_DB=process.env.INTERACT_DB_TEST
const app = new Server().app

const userStudent1={
    fullName: "camilo",
    email: "student1@test.com",
    password: "123456",
    courses: [],
    role:"student"
}

const userStudent2={
    fullName: "daniel",
    email: "student2@test.com",
    password: "123456",
    courses: [],
    role:"student"
}

const userTeacher={
    fullName: "oscar",
    email: "teacher@test.com",
    password: "123456",
    courses: [],
    role:"teacher"
}


const userAdmin={
    fullName: "admin",
    email: "admin@test.com",
    password: "123456",
    courses: [],
    role:"admin"
}

const userAdmin2={
    fullName: "admin-2",
    email: "admin2@test.com",
    password: "123456",
    courses: [],
    role:"admin"
}
let users = [userStudent1,userStudent2,userTeacher,userAdmin]
describe('GET users',()=>{
    it("Should respond with all users",async ()=>{
        const response= await request(app).get("/api/v1/user")
        expect(response.body.total).toBe(await User.countDocuments());
        expect(response.body.user[0]).toHaveProperty("fullName");
        expect(response.body.user[0]).toHaveProperty("email");
        expect(response.statusCode).toBe(200);
    })
})

describe('User Post',()=>{
    let token = ''
    describe("If the user is admin",()=>{
        it("Should return post the new user",async ()=>{
            const res = await request(app).post('/api/v1/auth/login').send(userAdmin);
            expect(res.body).toHaveProperty('token');
            token = res.body.token
            const responsepost= await request(app).post('/api/v1/user').set({'xtoken':token}).send(userTeacher)
            expect(res.body).toHaveProperty('user');

        })
    })
})
