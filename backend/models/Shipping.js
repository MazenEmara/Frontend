const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({

    orderedShipping: {
        type: String,
        ref: 'Order'
    },

    Status: {
        type: String,
        default: 'CREATED'
    },

},
    { timestamps: true })

module.exports = mongoose.model('Shipping', ShippingSchema);