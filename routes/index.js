var express = require('express');
var router = express.Router();
var path=require('path');

/* GET home page. */
router.get('/', function(req, resp, next) {
  resp.render('index.html');
});

router.post('/',(req,res)=>{
    //console.log(req.body);
    res.redirect('/');
});

module.exports = router;