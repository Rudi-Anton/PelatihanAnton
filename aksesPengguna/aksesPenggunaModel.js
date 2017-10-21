let mong = require('mongoose');
let aksespengguna = mong.Schema({
	KdPengguna : String,
    Tabel : String 
});
let AksesPengguna = module.exports = mong.model("AksesPengguna", aksespengguna, "AksesPengguna");