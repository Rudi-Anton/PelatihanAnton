let expres = require('express');
let route = expres.Router();
let PendaftaranRinciController=require('./pendaftaranRinciController.js');

route.get('/pendaftaranrinci', function (req, res) {
    PendaftaranRinciController.getPendaftaranRinci(function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.post('/pendaftaranrinci', function (req, res) {
    let pendaftaranrinci = req.body;
    PendaftaranRinciController.createPendaftaranRinci(pendaftaranrinci,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
route.delete('/pendaftaranrinci/:_id', function (req, res) {
    PendaftaranRinciController.removePendaftaranRinci(req.params._id,function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
 route.put('/pendaftaranrinci/:_id', function (req, res) {
     let pendaftaranrinci = req.body;
     PendaftaranRinciController.updatePendaftaranRinci(req.params._id,pendaftaranrinci,function (error, respon) {
         if (error) {
             throw error;
         }
         res.json(respon);
     });
 });
 route.get('/PendaftaranRinci/:_id', function (req, res) {
     let id = req.params._id;
     PendaftaranRinciController.getPendaftaranRinciById(id, function (error, respon) {
        if (error) {
            throw error;
        }
        res.json(respon);
    });
});
module.exports = route;