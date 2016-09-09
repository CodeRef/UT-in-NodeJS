var express=require('express');
var app=express();
app.set('views',__dirname);
app.set('view engine','jade');
app.use(express.static(__dirname));
app.get('*',function(req,res){
	res.render('index');
});
app.listen(3000);
console.log('NodeJS server is running on port 3000');
