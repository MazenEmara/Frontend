const { Router } = require('express');
const PaymentControllers = require('../controllers/PaymentController');
const paymentRouter = Router();


paymentRouter.post('/payment',PaymentControllers.post_payment);

module.exports = paymentRouter;