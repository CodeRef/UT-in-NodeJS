var mongoose=require('mongoose');
var userSchema=mongoose.Schema({
	firstname:{type:String},
	lastname:{type:String}
});
var User=mongoose.model('User',userSchema);
exports.seedUsers=function(){
	mongoose.model('User').find({}).exec(function(err,collection){
		if(collection.length==0){
			User.create({firstname:"Michael",lastname:"Bay"});
			User.create({firstname:"Simon",lastname:"Town"});
			User.create({firstname:"Tim",lastname:"Cook"});
		}
	});
}
