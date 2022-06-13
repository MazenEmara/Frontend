const Order = require('../models/Order');
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');
const notify = require('./notificationController');

module.exports.get_orders = (req, res) => {
    Order.find().sort({ date: -1 }).then(order => res.json(order));
}

module.exports.get_order = (req, res) => {
    Order.find({ Email: req.params.Email }).then(order => res.json(order));
}
module.exports.get_order_Shipping = (req, res) => {
    Order.findOne({ orderedShipping: req.params.orderedShipping }).then(order => res.json(order));
}

module.exports.post_order = async (req, res) => {
    const newOrder = new Order({

        Email: req.body.Email,
        orderedproducts: req.body.orderedproducts,
        Status: req.body.Status,
        orderedShipping: req.body.orderedShipping,
        totalPrice: req.body.totalPrice,
        address: req.body.address
    });
    setTimeout(() => {
        notify.Payment_Confirmed_Order_Created({
            Email: req.body.Email
        });
    }, 20000);

    const newOrder2 = await newOrder.save();
    res.json(newOrder2);
}

module.exports.update_order_status = async (req, res) => {
    await Order.findOneAndUpdate({ orderedShipping: req.params.orderedShipping }, { $set: { Status: req.params.Status } })
    //.then(function (order) {
    // Order.findOne({ _id: req.params.id }).then(function (order) {
    //     res.json(order);
    // });
    // });
}

module.exports.delete_order = async (req, res) => {
    await Order.findByIdAndDelete({ _id: req.params.id }).then(function (order) {
        res.json({ success: true });
    });
}