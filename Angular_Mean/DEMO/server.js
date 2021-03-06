var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist'])
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())



// app.get('/', function(req, res){
//     res.send("Hello world from Server.js")
// });

app.use(express.static(__dirname+"/public"));


app.get('/contactlist', function(req, res){
console.log(' I received a Get Request');

db.contactlist.find(function(err, docs){
console.log(docs)
res.json(docs)
})

})

app.post('/contactlist', function(req,res){
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc);
    })
})

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc);
    })
});

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc) {
        res.json(doc);
        
    })
})
app.put('/contactlist/id', function (res,req){
    var id = req.params.id;
    console.log(req.body.name)
    db.contactlist.fundAndModify({query:{_id:mongojs.ObjectId(id)},
    update:{$set:{name:req.body.name, email:req.body.email, number: req.body.number}},
    new:true},function (err,doc) {
        res.json(doc);
        
    
});
});
app.listen(3000);
console.log("Server is running on port 3000")