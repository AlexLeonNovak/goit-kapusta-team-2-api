const responseMethods = require('./responseMethods');
const auth = require('./auth');
const validation = require('./validation');
const uploadFile = require('./upload-file');
const controllerWrapper = require('./controller-wrapper');
const checkWalletData = require('./check-wallet-data');

module.exports = {
	responseMethods,
	auth,
	validation,
	uploadFile,
	controllerWrapper,
	checkWalletData
}
