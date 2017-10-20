let expres = require('express');
let route = expres.Router();
let ProvinsiController=require('./provinsiController.js');

route.get('/provinsi', function (req, res) {
    ProvinsiController.getProvinsi(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/provinsi', function (req, res) {
    let provinsi = req.body;
    ProvinsiController.createProvinsi(provinsi,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/provinsi/:_id', function (req, res) {
    ProvinsiController.removeProvinsi(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/provinsi/:_id', function (req, res) {
     let provinsi = req.body;
     ProvinsiController.updateProvinsi(req.params._id,provinsi,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/provinsi/:_id', function (req, res) {
     let id = req.params._id;
    ProvinsiController.getProvinsiById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;