
const orderdb = require('./all/orderdb')
module.exports = {
//get order data ------------
fetch_order_data: async(req , res) =>
{
    let data = await orderdb();
    data = await data.find({}).toArray();
    console.log("Request Successfully Acceted")
    res.send(data)
},

//get data by id from order 

fetch_data_by_id :async(req , res) =>
{
   
    var ObjectID = require('mongodb').ObjectID;
    let data = await orderdb();
    data = await data.find({_id: ObjectID(req.params.id)}).toArray();
    console.log("Request Fulfil Successfully")
    res.send(data)
},



//insert data in order table------------
insert_data : async(req , res) =>
{
   
    let data = await orderdb();
    data = await data.insert(req.body);

    console.log("Data inserted Successfully")
    res.send(data)
},


//update data----------
updata_data: async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await orderdb();
    data = await data.updateOne({_id: ObjectID(req.params.id)},{$set:req.body});

    res.send(data)
},

//delete data ----------------------------
delete_data: async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await orderdb();
    data = await data.deleteOne({_id: ObjectID(req.params.id)});

    res.send(data)
}
}
