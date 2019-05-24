var express = require('express');
var router = express.Router();
var qlikauth = require('qlik-auth');


router.post('/', function (req, res, next) {
if (req.body.username=="demo" && req.body.password=="demo") { 
    //Define user directory, user identity and attributes
    var profile = {
        'UserDirectory': 'Windows2012-CII',
        'UserId': 'qlikservice',
        'Attributes': [{ 'Group': 'ExampleGroup' }]
    };
    console.log(profile);
    var options = {
        Certificate: "./certs/client.pem",
        CertificateKey: "./certs/client_key.pem"
        //ProxyRestUri: "http://windows2012-cii:80/ticket",
        //TargetId:"ciao"
    };

    //Make call for ticket request
    qlikauth.requestTicket(req, res, profile, options);
}
else {
    res.status(401).json({
        message: "Not Authorized"
    })
}
    
});

module.exports = router;

