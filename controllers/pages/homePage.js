const path = require('path');

const homePage = (_, res) => {
  const indexPage = path.join(__dirname, '../../pages/index/index.html');
	return res.sendFile(indexPage);
}

module.exports = homePage
