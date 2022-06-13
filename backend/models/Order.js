const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    Email : {
        type: String,
        required : true
    },
    address: String,
    orderedproducts: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    Status : {
       type: String,
       default : 'CREATED'
    },
    orderedShipping : {
        type: Schema.Types.ObjectId,
        ref : 'Shipping'
    },
    totalPrice:Number
},
{collection:"order"},{timestamps: true});
module.exports = Order = mongoose.model('order',OrderSchema);