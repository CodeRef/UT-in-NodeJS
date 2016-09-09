var express=require('express');
var app=express();
app.set('views',__dirname);
app.set('view engine','jade');
app.use(express.static(__dirname));

// Set up web api
app.get('/api/users',function(req,res){
	res.send([
		{firstname:"John",lastname:"Travota"},
		{firstname:"Jame",lastname:"Mars"}
	]);
});

app.get('*',function(req,res){
	res.render('index');
});
app.listen(3000);
console.log('NodeJS server is running on port 3000');
