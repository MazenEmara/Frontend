
const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');


module.exports.Order_Shipped_Notification = async (req) => {
    function getMessage() {
      const body = 'Your Order has been shipped Successfully!';
      return {
        to: req.Email,
        from: 'rabbit.market.notifications@gmail.com',
        subject: 'Rabbit Market Notification System',
        templateId: '89456da9-3ac5-4069-b3fb-70c737514750',
        text: body,
        html: `<strong>${body}</strong>`,
      };
    }
    async function sendEmail() {
      try {
        await sendGridMail.send(getMessage());
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error sending email');
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    }
    
    (async () => {
      console.log('Sending email');
      await sendEmail();
    })();
}

module.exports.Order_Cancelled_Notification = async (req,res) => {
  function getMessage() {
    const body = 'Your Order has been Cancelled Successfully!';
    return {
      to: req.Email,
      from: 'rabbit.market.notifications@gmail.com',
      subject: 'Rabbit Market Notification System',
      templateId: '89456da9-3ac5-4069-b3fb-70c737514750',
      text: body,
      html: `<strong>${body}</strong>`,
    };
  }
  async function sendEmail() {
    try {
      await sendGridMail.send(getMessage());
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email');
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
  
  (async () => {
    console.log('Sending email');
    await sendEmail();
  })();

}

module.exports.Payment_Confirmed_Order_Created = async (req,res) => {
  function getMessage() {
    const body = 'Thank you for your purchase your order will be delivered for you in no time.';
    return {
      to: req.Email,
      from: 'rabbit.market.notifications@gmail.com',
      subject: 'Rabbit Market Notification System',
      templateId: '89456da9-3ac5-4069-b3fb-70c737514750',
      text: body,
      html: `<strong>${body}</strong>`,
    };
  }
  async function sendEmail() {
    try {
      await sendGridMail.send(getMessage());
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email');
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
  
  (async () => {
    console.log('Sending email');
    await sendEmail();
  })();
}
