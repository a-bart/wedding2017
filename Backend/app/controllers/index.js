var exec = require('child_process').exec;
var shell = require('node-powershell');

var apiController = {};
var ps = new shell({executionPolicy: 'Bypass', debugMsg: true});

function isConnected() {
  return ps.addCommand(`Get-PnPContext`)
    .then(function(){
        return ps.invoke();
    });
}

apiController.isConnected = function (req, res) {
  isConnected()
    .then((data) => {
      res.send('OK');
    })
    .catch(error => {
      res.sendStatus(401);
    });
}

module.exports = apiController;