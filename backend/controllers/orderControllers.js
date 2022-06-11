const Order = require('../models/Order');

module.exports.get_orders = (req,res) => {
    Order.find().sort({date:-1}).then(order => res.json(order));
}

module.exports.get_order = (req,res) => {
    Order.find({Email : req.params.Email}).then(order => res.json(order));
}

module.exports.post_order = async (req,res) => {
    const newOrder = new Order({

        Email: req.body.Email,
        orderedproducts: req.body.orderedproducts,
        Status: req.body.Status,
        orderedShipping: req.body.orderedShipping
    });
    const newOrder2 =  await newOrder.save();
    res.json(newOrder2);
}

module.exports.update_order_status = async (req,res) => {
    await Order.findByIdAndUpdate({_id: req.params.id} , {$set: { Status : req.body.Status } }).then(function(order){
        Order.findOne({_id: req.params.id}).then(function(order){
            res.json(order);
        });
    });
}

module.exports.delete_order = async (req,res) => {
    await Order.findByIdAndDelete({_id: req.params.id}).then(function(order){
        res.json({success: true});
    });
}