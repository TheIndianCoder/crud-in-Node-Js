const express = require('express');
const  mongodb = require('mongodb');
const dbConnect = require('./dbConnect');
const app = express();

app.use(express.json());  // To get Body (Data) from external App or API

app.get('/', async (req,resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)    
});

app.post('/', async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result);
});

// Update data from body Part.......

app.put("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
            {name:req.body.name}, // Condition Column
            {$set:req.body}  // Updatable Columns
        )
    resp.send(result)
})

// Update Data From URL Parameters ..........

app.put("/:name", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
            {name:req.params.name}, // Condition Column
            {$set:req.body}  // Updatable Columns
        )
    resp.send(result)
})

app.delete("/:id", async(req,resp)=>{
    console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne(
            {_id: new mongodb.ObjectId(req.params.id)} // Create Instance of object ID
        )
    resp.send(result) // To Complete Response
})
app.listen(5000);