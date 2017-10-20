let mong = require('mongoose');
let provinsi = mong.Schema({
	KdProvinsi: String,
	NamaProvinsi: String,
	Kota: {
		kdKota: String,
		NamaKota: String,
		Kecamatan: {
			kdKecamatan: String,
			NamaKecamatan: String
		}
	}
});
let Provinsi = module.exports = mong.model("Provinsi", provinsi, "Provinsi");