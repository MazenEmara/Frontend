const Shipping = require('../models/Shipping');

module.exports.get_Shippings = (req, res) => {
    Shipping.find().sort({ date: -1 }).then(Shipping => res.json(Shipping));
}

module.exports.get_Shipping = (req, res) => {
    Shipping.find({ orderedShipping: req.params.orderedShipping }).then(Shipping => res.json(Shipping));

}

module.exports.update_Shipping_status = async (req, res) => {
    await Shipping.findOneAndUpdate({ orderedShipping: req.params.orderedShipping }, { $set: { Status: req.params.Status } })
    //.then(function (Shipping) {
    //     Shipping.findOne({ _id: req.params.id }).then(function (Shipping) {
    //         res.json(Shipping);
    //     });
    // });

}

module.exports.post_Shipping = async (req, res) => {
    const newShipping = new Shipping({
        Status: req.body.Status,
        orderedShipping: req.body.orderedShipping,
    });
    const newShipping2 = await newShipping.save();
    res.json(newShipping2);

}





