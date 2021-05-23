const mongoose = require("mongoose"); //import mongoose
const Item = require('./Item');

// tea schema
const CarSchema = new mongoose.Schema( { 
        cate_ID: { type:String, required:true  } 
        , data:  Item.Item
    }
);

const CarModel = mongoose.model('cars', CarSchema); //convert to model named Tea
module.exports = CarModel; //export for controller use