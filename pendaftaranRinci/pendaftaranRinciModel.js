let mong = require('mongoose');
let pendaftaranrinci = mong.Schema({
	KdPendaftaran: String,
    KdAplikasi : String,
    Status : String
});
let PendaftaranRinci = module.exports = mong.model("PendaftaranRinci", pendaftaranrinci, "PendaftaranRinci");