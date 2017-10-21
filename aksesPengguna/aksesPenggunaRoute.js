let expres = require('express');
let route = expres.Router();
let AksesPenggunaController=require('./aksesPenggunaController.js');

route.get('/aksesPengguna', function (req, res) {
    AksesPenggunaController.getAksesPengguna(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/aksesPengguna', function (req, res) {
    let aksespengguna = req.body;
    AksesPenggunaController.createAksesPengguna(aksespengguna,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/aksesPengguna/:_id', function (req, res) {
    AksesPenggunaController.removeAksesPengguna(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/aksesPengguna/:_id', function (req, res) {
     let aksespengguna = req.body;
     AksesPenggunaController.updateAksesPengguna(req.params._id,aksespengguna,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/aksesPengguna/:_id', function (req, res) {
     let id = req.params._id;
     AksesPenggunaController.getAksesPenggunaById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;