const mongoose = require("mongoose"); //import mongoose
const Item = require('./Item');

// tea schema
const CateSchema = new mongoose.Schema({
    general: Item.Item_Detail
});

const CateModel = mongoose.model('cate', CateSchema); //convert to model named Tea
module.exports = CateModel; //export for controller use