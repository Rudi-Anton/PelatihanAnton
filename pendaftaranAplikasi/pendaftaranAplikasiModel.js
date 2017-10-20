let mong = require('mongoose');
let pendaftaranaplikasi = mong.Schema({
	KdPendaftaran : String,
    TglPendaftaran : String,
    DetailPegawai : String
});
let PendaftaranAplikasi = module.exports = mong.model("PendaftaranAplikasi", pendaftaranaplikasi, "PendaftaranAplikasi");