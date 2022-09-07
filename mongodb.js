
const {MongoClient} = require("mongodb");
const url= 'mongodb+srv://admin:admin@cluster1.jfjsdmp.mongodb.net/';
const client = new MongoClient(url);
 const database = "order-management";

 async function dbConnection()
{
    let result= await client.connect();
    let db = result.db(database);
    return db.collection("customer")
}


module.exports = dbConnection;



