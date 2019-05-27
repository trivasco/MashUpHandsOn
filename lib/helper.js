var fs = require('fs'); //per i certificati 
var https = require('https'); //per la richiesta del Ticket

module.exports = {

    QSAuth : function (body){

        return new Promise( (fulfill, reject ) =>{
            var xrfkey = "1234567890acbdef";


            var options = {
                hostname: body.serverName,
                port: body.port | 4243,
                path: '/qps/'+body.vp+'/ticket?xrfkey='+xrfkey,
                method: 'POST',
                rejectUnauthorized: false, 
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json',
                    'x-qlik-xrfkey' : xrfkey
                },
                cert: fs.readFileSync("./certs/"+body.cert),
                key : fs.readFileSync("./certs/"+body.key)
              };
        
              var bodyData = {
                UserDirectory : body.userDir,
                UserId : body.userID
              };      

              //console.log(options);
              //console.log(bodyData);
        
        
              var req = https.request(options, function(res) {
                //console.log(' --------->> Status: ' + res.statusCode);
                //console.log(' --------->> Headers: ' + JSON.stringify(res.headers));
        
                res.on('data', function (body) {
                    //console.log(' --------->> Body: ' + body);
                    fulfill(JSON.parse(body));
                });
            });
        
            req.on('error', function(e) {
              reject(e.message);
            });
        
            req.write(JSON.stringify(bodyData));
            req.end();              
        })
    }
}