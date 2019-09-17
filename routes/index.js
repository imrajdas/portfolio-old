var express = require('express');
var router = express.Router();
const {IncomingWebhook} = require('@slack/client');
const url = "https://hooks.slack.com/services/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"
const webhook = new IncomingWebhook(url);
const swal = require('sweetalert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/send', function(req, res) {

  var slackMsg = `:ledger:Name: ${req.body.name}\n:email:Email: ${req.body.email}\n:iphone: Phone: ${req.body.phone}\n:love_letter:Message: ${req.body.msg}`
  console.log(slackMsg);
  webhook.send(slackMsg, function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        // console.log('Message sent: ', res);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
    }
  });
 

});


module.exports = router;
