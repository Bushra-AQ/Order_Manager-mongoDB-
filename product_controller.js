
const productdb = require('./productdb')

module.exports = {
    //get product data ------------
fetch_product_data: async(req , res) =>
{
    let data = await productdb();
    data = await data.find({}).toArray();
    console.log("Request Successfully Acceted")
    res.send(data)
},

//get data by id from product 

fetch_product_data_by_id :async(req , res) =>
{
   
    var ObjectID = require('mongodb').ObjectID;
    let data = await productdb();
    data = await data.find({_id: ObjectID(req.params.id)}).toArray();
    console.log("Request Fulfil Successfully")
    res.send(data)
},

//insert data in product table------------
insert_data:async(req , res) =>
{
   
    let data = await productdb();
    data = await data.insert(req.body);

    console.log("Data inserted Successfully")
    res.send(data)
},


//update data----------
update_data :async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await productdb();
    data = await data.updateOne({_id: ObjectID(req.params.id)},{$set:req.body});

    res.send(data)
},

//delete data ----------------------------
delete_data :async(req , res) =>
{
    var ObjectID = require('mongodb').ObjectID;
    let data = await productdb();
    data = await data.deleteOne({_id: ObjectID(req.params.id)});

    res.send(data)
}
}