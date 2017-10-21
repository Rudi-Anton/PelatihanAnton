let mong = require('mongoose');
let pendaftaranrinci = mong.Schema({
	KdPendaftaran: String,
    KdAplikasi : String,
    Statua : String
});
let PendaftaranRinci = module.exports = mong.model("PendaftaranRinci", pendaftaranrinci, "PendaftaranRinci");