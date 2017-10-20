let expres = require('express');
let route = expres.Router();
let PenggunaController = require('./penggunaController.js');
let Pengguna = require('./penggunaModel.js');
global.config = require('../config/config');
let jwt = require('jsonwebtoken');
let jwt_secret = "shhh";

route.get('/pengguna', function (req, res) {
    PenggunaController.getPengguna(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/pengguna', function (req, res) {
    let pengguna = req.body;
    PenggunaController.createPengguna(pengguna, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/pengguna/:_id', function (req, res) {
    PenggunaController.removePengguna(req.params._id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.put('/pengguna/:_id', function (req, res) {
    let pengguna = req.body;
    PenggunaController.updatePengguna(req.params._id, pengguna, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.get('/pengguna/:_id', function (req, res) {
    let id = req.params._id;
    PenggunaController.getPenggunaById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});

route.post('/pengguna/authenticate', function (req, res) {
    let data = {
        NamaPengguna: req.body.NamaPengguna,
        KunciPengguna: req.body.KunciPengguna
    };
    Pengguna.findOne(data).lean().exec(function (err, pengguna) {
        if (err) {
            return res.json({ error: true });
        }
        if (!pengguna) {
            return res.status(404).json({ 'message': 'pengguna not found!' });
        }
        let token = jwt.sign(pengguna, global.config.jwt_secret, {
            expiresIn: 1440 // expires in 1 hour
        });
        res.json({ error: false, token: token });
    })
});

module.exports = route;