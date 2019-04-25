var IBMCloudEnv = require('ibm-cloud-env');
var serviceManager = require('./service-manager');
IBMCloudEnv.init();

module.exports = function(){
	require('./service-cloudant')(serviceManager);

};