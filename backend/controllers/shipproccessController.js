const axios = require('axios');

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');
const notify = require('../controllers/notificationController');


var stat = "";
var rout = 'http://localhost:3000/shipping/update/';
var id = '';
var tot = rout + id + '/' + stat


module.exports.update_1 = async (req, res) => {
    setTimeout(() => {
        stat = "SHIPPED";
        tot = rout + req.params.orderedShipping + '/' + stat;
        axios.patch(tot);

        tot = 'http://localhost:3000/orders/update/' + req.params.orderedShipping + '/' + 'PROCESSING';
        axios.put(tot)
        //axios.put('')
    }, 5000);
}



module.exports.update_2 = async (req, res) => {

    setTimeout(() => {
        stat = "DELIVERED";
        tot = rout + req.params.orderedShipping + '/' + stat;
        axios.patch(tot);

        /////
        var url = 'http://localhost:3000/orders';
        axios.get(url).then(function (result) {
            see(result.data);
        });

        async function see(data) {

            for (var i = 0; i < data.length; i++) {

                if (data[i].orderedShipping === req.params.orderedShipping) {
                    notify.Order_Shipped_Notification({
                        Email: data[i].Email.toString()
                    });
                }
            }
        }
        /////
        tot = 'http://localhost:3000/orders/update/' + req.params.orderedShipping + '/' + 'FULFILLED';
        axios.put(tot)
    }, 10000);
}

module.exports.return = async (req, res) => {

    setTimeout(() => {
        stat = "RETURNED";
        tot = rout + req.params.orderedShipping + '/' + stat;
        axios.patch(tot);
        /////

        var url = 'http://localhost:3000/orders';
        axios.get(url).then(function (result) {
            see(result.data);
        });

        async function see(data) {

            for (var i = 0; i < data.length; i++) {

                if (data[i].orderedShipping === req.params.orderedShipping) {
                    notify.Order_Cancelled_Notification({
                        Email: data[i].Email.toString()
                    });
                }
            }
        }
        ////
        tot = 'http://localhost:3000/orders/update/' + req.params.orderedShipping + '/' + 'CANCELLED';
        axios.put(tot)
    }, 1000);
}
