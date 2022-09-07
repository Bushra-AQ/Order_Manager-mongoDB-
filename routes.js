const express = require('express')
const dbConnection=require('./mongodb')

const app = express();

//import all controllers-------------------------------------------------------------
const customer_controller = require('./customer_controller');
const product_controller = require('./product_controller');
const order_controller = require('./order_controller');



app.use(express.json());

app.listen(9000, ()=>{
    console.log("Sever is now listening at port 9000");
})

//------------------------------------customer data routes----------------------------
//get customer data ------------
app.get('/customer' ,customer_controller.fetch_data );

//get data by id from customer 

app.get('/customer/:id' , customer_controller.fetch_by_id);



//insert data in customer table------------
app.post('/customer/insert' , customer_controller.data_insert);


//update data----------
app.put("/customer/update/:id" , customer_controller.data_update)

//delete data ----------------------------
app.delete("/customer/delete/:id" ,customer_controller.data_remove )


//-------------------------------------product data routes----------------------
//get product data ------------
app.get('/product' , product_controller.fetch_product_data);

//get data by id from product 

app.get('/product/:id' , product_controller.fetch_product_data_by_id);



//insert data in product table------------
app.post('/product/insert' , product_controller.insert_data);


//update data----------
app.put("/product/update/:id" ,product_controller. update_data)

//delete data ----------------------------
app.delete("/product/delete/:id" ,product_controller.delete_data)

//----------------------------------------------order data routes---------------------------
//get order data ------------
app.get('/order' , order_controller.fetch_order_data);

//get data by id from order 

app.get('/order/:id' ,  order_controller.fetch_data_by_id);



//insert data in order table------------
app.post('/order/insert' , order_controller. insert_data);


//update data----------
app.put("/order/update/:id" ,  order_controller.updata_data)

//delete data ----------------------------
app.delete("/order/delete/:id" , order_controller.delete_data)



