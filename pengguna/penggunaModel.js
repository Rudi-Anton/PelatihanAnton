let mong = require('mongoose');
let pengguna = mong.Schema({
	KdPengguna : String,
    NamaPengguna : String,
    KunciPengguna : String,
    StatusPengguna : String
});
let Pengguna = module.exports = mong.model("Pengguna", pengguna, "Pengguna");