const express= require("express");
const app= express();
const port= 8080; 
const mongoose = require("mongoose");
const path= require("path");
const Product= require("/models/product");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecom');

}
// insert product data in the database
let product1= new Product({
  name: ""
})



app.get("/", (req, res)=>{
  res.send("root is working");
})

app.listen(port, ()=>{
    console.log(`Listening on port ${8080}`);
})