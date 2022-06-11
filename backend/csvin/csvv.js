const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");
// let url = "mongodb://username:password@localhost:27017/";
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let url = "mongodb+srv://ELsheikh:ELsheikh@cluster0.hehgw.mongodb.net/cluster0?retryWrites=true&w=majority";
let post_url = "http://localhost:3000/products/add"
let stream = fs.createReadStream("./csvfile.csv");
let csvData = [];
let csvStream = fastcsv
.parse()
.on("data", function(data) {
    csvData.push({
        Product_name: data[0],
        Price: data[1],
        weight: data[2],
        description: data[3],
        quantity : data[5]
    });
    })
.on("end", function() {
    // remove the first line: header
    csvData.shift();
    for (var i=0;i<csvData.length;i++){
        // console.log(csvData[i])
        let xhr = new XMLHttpRequest();
        xhr.open("POST", post_url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.onload = () => console.log(xhr.responseText);
        xhr.send(JSON.stringify(csvData[i]));
    }
    
    // console.log(csvData);
    // mongodb.connect(
    // url,
    // { useNewUrlParser: true, useUnifiedTopology: true },
    // (err, client) => {
    //     if (err) throw err;
    //     client
    //     .db("cluster0")
    //     .collection("product")
    //     .insertMany(csvData, (err, res) => {
    //         // if (err) throw err;
    //         if (err) console.log(err);
    //         console.log(`Inserted: ${res.insertedCount} rows`);
    //         client.close();
    //     });
    // }
    // );
});
stream.pipe(csvStream);

