const registration = require('./registration');
const login = require('./login');
const logout = require('./logout');
const getByToken = require('./getByToken');
const updateBalance = require('./updateBalance');

module.exports = {
	registration,
	login,
	logout,
	getByToken,
	updateBalance
}
