let mongoose = require('mongoose');

let database = {
	user : 'dbpelatihan',
	pass : 'Sayangorangtua20',
	url : 'ds113785.mlab.com:13785',
	name : 'dbpelatihan'
}
mongoose.connect('mongodb://'+database.user+':'+database.pass+'@'+database.url+'/'+database.name);
