let expres = require('express');
let mong = require('mongoose');
let bodyParser = require('body-parser');
let app=expres();

//token twt
 //global.config = require('./config/config');
 //let jwt    = require('jsonwebtoken');
 //let jwt_secret = "shhh";

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8889));

//let verifyToken = require('./middleware/verifyToken');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS,PUT");
  next();
});

//app.use('/api', require('./controllers/helloWorld.js')(router));

// let penggunaRoute=require('./pengguna/penggunaRoute.js');
// app.use('/api',penggunaRoute);
let provinsiRoute=require('./provinsi/provinsiRoute.js');
app.use('/api',provinsiRoute);
let aksesPenggunaRoute=require('./aksespengguna/aksesPenggunaRoute.js');
app.use('/api',aksesPenggunaRoute);
// let pendaftaranRinciRoute=require('./pendaftaranrinci/pendaftaranRinciRoute.js');
// app.use('/api',pendaftaranRinciRoute);
// let pendaftaranAplikasiRoute=require('./pendaftaranaplikasi/pendaftaranAplikasiRoute.js');
// app.use('/api',pendaftaranAplikasiRoute);
// let guruKungfuRoute=require('./guruKungfu/guruKungfuRoute.js');
// app.use('/api',guruKungfuRoute);
// let muridKungfuRoute=require('./muridKungfu/muridKungfuRoute.js');
// app.use('/api',muridKungfuRoute);
// let kyuKungfuRoute=require('./kyuKungfu/kyuKungfuRoute.js');
// app.use('/api',kyuKungfuRoute);
require("./koneksidb/koneksidb")
//mong.connect('mongodb://localhost:27017/dbpelatihan');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
