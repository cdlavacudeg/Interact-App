const request = require('supertest')
const Server = require('../models/server.model')
const server = require('../models/server.model');
jest.setTimeout(20000)
require('dotenv').config()
const app = new Server().app

describe('GET users',()=>{
    it("Should respond with all users",async ()=>{
        const response= await request(app).get("/api/v1/user")
        expect(response.body.user.length).toBe(17);
        expect(response.body.user[0]).toHaveProperty("fullName");
        expect(response.body.user[0]).toHaveProperty("email");
        expect(response.statusCode).toBe(200);
    })
})
