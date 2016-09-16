var express=require('express');
var app=express();
var mongoose=require('mongoose');
var userModel=require('./models/User');
mongoose.connect('mongodb://localhost/nut');
app.set('views',__dirname);
app.set('view engine','jade');
app.use(express.static(__dirname));

var conn=mongoose.connection;
conn.once('open',function(){	
userModel.seedUsers();
	console.log('Connect to mongodb success');
});

// Set up web api
app.get('/api/users',function(req,res){
	mongoose.model('User').find({}).exec(function(err,collection){
		res.send(collection);
	});
});


app.get('*',function(req,res){
	res.render('index');
});

app.listen(3000);
console.log('NodeJS server is running on port 3000');
