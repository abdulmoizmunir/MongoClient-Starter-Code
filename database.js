var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    function(err, db) 
    {
        if (err) throw err;
        var database = db.db("inventory");
        var items = [
            {
                name: 'Cold compress', 
                quantity: 4, 
                lastUpdated: new Date(),
            },
            {
                name: 'Sanitizer (100ml)', 
                quantity: 1,
                lastUpdated: new Date()
            },
            {
                name: 'Adhesive Bandages', 
                quantity: 2, 
                lastUpdated: new Date()
            },
            {
                name: 'Sterile gauze rolls', 
                quantity: 3, 
                lastUpdated: new Date()
            }, 
            {
                name: 'Hydrocortisone ointment', 
                quantity: 5, 
                lastUpdated: new Date()
            },
            {
                name: 'Hydrogen peroxide (15ml)', 
                quantity: 6, 
                lastUpdated: new Date()
            },
        ];
        
        database.collection("items").insertMany(items, function(err, res) {
            if (err) throw err;
            console.log("Number of items inserted: " + res.insertedCount);
            db.close();
        });
    });