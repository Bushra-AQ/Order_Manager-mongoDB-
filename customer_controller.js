const dbConnection=require('./mongodb')

module.exports = {
//----------------------------------------customer data-----------------------------------------
    //----------------------get customer data----------------
fetch_data : async(req , res) =>
{
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log("Request Successfully Acceted")
    res.send(data)
},

 //----------------------------------get data by id-----------------
fetch_by_id :async(req , res) =>
{
   
    var ObjectID = require('mongodb').ObjectID;
    let data = await dbConnection();
    data = await data.find({_id: ObjectID(req.params.id)}).toArray();
    console.log("Request Fulfil Successfully")
    res.send(data)
},

//--------------------------------insert data-----------------------
data_insert : async(req , res) =>
{
   
    let data = await dbConnection();
    data = await data.insert(req.body);

    console.log("Data inserted Successfully")
    res.send(data)
},

//-----------------------------update data--------------------------

data_update :async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await dbConnection();
    data = await data.updateOne({_id: ObjectID(req.params.id)},{$set:req.body});

    res.send(data)
},

//--------------------------------delete data-----------------------
data_remove : async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await dbConnection();
    data = await data.deleteOne({_id: new mongodObjectID(req.params.id)});

    res.send(data)
}



}