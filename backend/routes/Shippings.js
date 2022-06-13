const { Router } = require('express');
const shippingControllers = require('../controllers/shippingController');
const processControllers = require('../controllers/shipproccessController');
const shippingRouter = Router();

shippingRouter.get('/shippings', shippingControllers.get_Shippings);
shippingRouter.get('/shipping/:orderedShipping', shippingControllers.get_Shipping);
shippingRouter.post('/shipping/add', shippingControllers.post_Shipping);
shippingRouter.patch('/shipping/update/:orderedShipping/:Status', shippingControllers.update_Shipping_status);
shippingRouter.patch('/shipping/up1/:orderedShipping', processControllers.update_1);
shippingRouter.patch('/shipping/up2/:orderedShipping', processControllers.update_2);
shippingRouter.patch('/shipping/return/:orderedShipping', processControllers.return);

module.exports = shippingRouter;