let expres = require('express');
let route = expres.Router();
let PenggunaController = require('./penggunaController.js');

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


module.exports = route;