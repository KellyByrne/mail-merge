var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.post('/preview', function(req, res, next){
	res.render('preview', {email: req.body.email, subject: req.body.subject, textbody: req.body.textbody, numOfEmails: req.body.email.split('\r\n').length})
});










module.exports = router;
