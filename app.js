var express = require("express");
var app = express();
var http =  require("http");
var mongoose = require("mongoose");
var User = require("./userModel")
var server = http.createServer(app);
// Mongodb Database setup configuration
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var PORT = 8000;
var db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/sugarboxtest', { promiseLibrary: require('bluebird') });
db.on('connecting', function () {
  console.log('connecting to MongoDB...');
});

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});
db.on('connected', function () {
  console.log('MongoDB connected!');
});
db.once('open', function () {
  console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
  console.log('MongoDB reconnected!');
});
db.on('disconnected', function () {
  console.log('MongoDB disconnected!');
  mongoose.connect(process.env.DB_URL, {
    useMongoClient: true,
    promiseLibrary: require('bluebird')
  }, { server: { auto_reconnect: true } });
});
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.post("/adduser",(req,res)=>{

    if (req.headers.authorization == 'Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=') {
        User.create(req.body,(err,data)=>{
        if(err){
            res.json({status:500,message:"Internal Error"})
        }else{
            res.json({status:200,message:"User created successfully"})
        }
        })
    }else{
        return res.status(401).send('Token is invalid')

    }
})
app.delete("/deleteuser/:userid",(req,res)=>{
    if (req.headers.authorization == 'Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=') {
        User.remove({_id:req.params.userid},(err,data)=>{
        if(err){
            res.json({status:500,message:"Internal Error"})
        }else{
            res.json({status:200,message:"User Deleted successfully"})
        }
        })
    }else{
        return res.status(401).send('Token is invalid')

    }
})

server.listen(PORT,()=>{
    console.log("App is started : "+PORT);
})

