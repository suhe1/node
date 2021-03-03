const fs = require('fs');
// console.log('hello');
const request = require('request');
request('https://nodejs.org/dist/latest-v14.x/docs/api/domain.json',
	(error, response, body) => {
		fs.writeFileSync('./domain.json',body);
	});

request('https://nodejs.org/dist/latest-v14.x/docs/api/domain.html',
(error, response, body) => {
	fs.writeFileSync('./domain.html',body);
});
