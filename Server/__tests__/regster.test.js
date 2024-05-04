const {User, sequelize} = require('../models');
const {queryInterface} = sequelize
const app = require('../app');
const request = require('supertest');
const jwt = require('jsonwebtoken');

let accessToken = null

const user_1 = {
    fullName : "user",
    email : "user@email.com",
    password : "userpassword",
    phoneNumber: "085726261255",
    address : "Bandung 6789"
}

let accessTokenUser1 = null

beforeAll(async () => {
    await queryInterface.bulkInsert('Users', [admin], {})
    const userAdmin = await User.findOne({
        where : {
            email : admin.email
        }
    })
    accessToken = jwt.sign({
        id : userAdmin.id,
        role : userAdmin.role
    }, process.env.ACCESS_TOKEN_SECRET)
    const user1 = await User.create(user_1)
    accessTokenUser1 = jwt.sign({
        id : user1.id,
        role : user1.role
    }, process.env.ACCESS_TOKEN_SECRET)

})




describe("POST /register", () => {
    test("Should return 201 and an object", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send({
                fullName : "user1",
                email : "user1@email.com",
                password : "user1password",
                phoneNumber : "085726261255",
                address : "Bandung 6789"
            })
    
            expect(status).toBe(201)
            expect(body).toHaveProperty('fullName', expect.any(String))
            expect(body).toHaveProperty('email', expect.any(String))
            expect(body).toHaveProperty('password', expect.any(String))
    })

    test("Should return 400 and a message (email is required)", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send({
                fullName : "user2",
                password : "user2password",
                address : "Bandung 6789"
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (password is required)", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send({
                fullName : "user3",
                email : "user3@email.com",
                address : "Bandung 6789"
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (address is required)", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send({
                fullName : "user3",
                password : "user2password",
                email : "user3@email.com"
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (email is required)", async () => {
        let {status, body} = await request(app)
            
            .post('/register')
            .send({
                username : "user4",
                email : "",
                password : "user4password",
                address : "Bandung 6789"
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (password is required)", async () => {
        let {status, body} = await request(app)
            
            .post('/register')
            .send({
                username : "user5",
                email : "user5@email.com",
                password : "",
                address : "Bandung 6789"
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (address is required)", async () => {
        let {status, body} = await request(app)
            
            .post('/register')
            .send({
                username : "user5",
                email : "user5@email.com",
                password : "user5password",
                address : ""
            })
    
            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (email has been used)", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send(user_1)

            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })

    test("Should return 400 and a message (email format is incorrect)", async () => {
        let {status, body} = await request(app)
            .post('/register')
            .send({
                username : "user6",
                email : "user6email.com",
                password : "user6",
            })

            expect(status).toBe(400)
            expect(body).toHaveProperty('message', expect.any(String))
    })
    

})

afterAll(async () => {
    await queryInterface.bulkDelete('Users', null, {
        truncate: true,
        cascade: true,
        restartIdentity: true
    })
})