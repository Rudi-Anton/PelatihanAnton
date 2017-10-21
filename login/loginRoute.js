let expres = require('express');
let route = expres.Router();
let LoginController=require('./loginController.js');
let Login = require('./loginModel.js');
let jwt = require('jsonwebtoken');
let jwt_secret = "shhh";

route.get('/login', function (req, res) {
    LoginController.getLogin(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});

route.post('/login/authenticate', function (req, res) {
    let data = {
        Username: req.body.Username,
        Password: req.body.Password
    };
    Login.findOne(data).lean().exec(function (err, login) {
        if (err) {
            return res.json({ error: true });
        }
        if (!login) {
            return res.status(404).json({ 'message': 'Login not found!' });
        }
        let token = jwt.sign(login, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        res.json({ error: false, token: token });
    })
});
module.exports = route;