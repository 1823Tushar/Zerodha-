const { Schema } = require("mongoose");

const OrderSchema =  new Schema ({
    name: String,
    price: Number,
    qty:Number,
    mode:String,
    //    percent: String,
//     isDown: Boolean,

});

module.exports =  { OrderSchema };