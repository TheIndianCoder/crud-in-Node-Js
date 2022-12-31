const {MongoClient} = require('mongodb');
const { get } = require('mongoose');
const url = 'mongodb://127.0.0.1:27017';
const database = 'crud';
const client = new MongoClient(url);


async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('record');    
}

module.exports= dbConnect;