let expres = require('express');
let route = expres.Router();
let PendaftaranAplikasiController=require('./pendaftaranAplikasiController.js');

route.get('/pendaftaranaplikasi', function (req, res) {
    PendaftaranAplikasiController.getPendaftaranAplikasi(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/pendaftaranaplikasi', function (req, res) {
    let pendaftaranaplikasi = req.body;
    PendaftaranAplikasiController.createPendaftaranAplikasi(pendaftaranaplikasi,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/pendaftaranaplikasi/:_id', function (req, res) {
    PendaftaranAplikasiController.removePendaftaranAplikasi(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/pendaftaranaplikasi/:_id', function (req, res) {
     let pendaftaranaplikasi = req.body;
     PendaftaranAplikasiController.updatePendaftaranAplikasi(req.params._id,pendaftaranaplikasi,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/pendaftaranaplikasi/:_id', function (req, res) {
     let id = req.params._id;
     PendaftaranAplikasiController.getPendaftaranAplikasiById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;