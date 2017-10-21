let expres = require('express');
let route = expres.Router();
let AksesPenggunaController=require('./aksesPenggunaController.js');

route.get('/aksespengguna', function (req, res) {
    AksesPenggunaController.getAksesPengguna(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/aksespengguna', function (req, res) {
    let AksesPengguna = req.body;
    AksesPenggunaController.createAksesPengguna(AksesPengguna,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/aksespengguna/:_id', function (req, res) {
    AksesPenggunaController.removeAksesPengguna(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/aksespengguna/:_id', function (req, res) {
     let AksesPengguna = req.body;
     AksesPenggunaController.updateAksesPengguna(req.params._id,AksesPengguna,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/aksespengguna/:_id', function (req, res) {
     let id = req.params._id;
    AksesPenggunaController.getAksesPenggunaById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;