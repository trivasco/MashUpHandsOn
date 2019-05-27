var express = require('express');
var router = express.Router();
var helper = require('../lib/helper');


router.post('/', function (req, res, next) {
if (req.body.username=="demo" && req.body.password=="demo") { 
    //Create body of the JSP1
    var body ={
        serverName: "windows2012-cii",
        port: 4242,
        vp:"ticket",
        cert: "client.pem",
        key: "client_key.pem",
        userDir: 'Windows2012-CII',
        userID: 'qlikservice'
    };

    helper.QSAuth(body)
    .then((data)=>{
        console.log("Server-side: "+data.Ticket) // verifica ticket QSE
        res.status(200).json(data)
    } )
    .catch(e => console.log(e))
}
else {
    res.status(401).json({
        message: "Not Authorized"
    })
}
    
});

module.exports = router;

