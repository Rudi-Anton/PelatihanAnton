Login=require('./loginModel.js');
module.exports.getLogin=function(callback,limit){
    Login.find(callback).limit(limit);
}