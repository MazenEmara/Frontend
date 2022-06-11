const { Router } = require('express');
const orderControllers = require('../controllers/orderControllers');
const orderRouter = Router();

orderRouter.get('/orders', orderControllers.get_orders);
orderRouter.get('/order/:Email', orderControllers.get_order);
orderRouter.post('/orders/add', orderControllers.post_order);
orderRouter.put('/orders/update/:id', orderControllers.update_order_status);
orderRouter.delete('/orders/delete/:id', orderControllers.delete_order);

module.exports = orderRouter;