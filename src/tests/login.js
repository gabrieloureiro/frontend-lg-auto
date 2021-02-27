const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, width: 1920, height: 1070 });


nightmare
	.goto('http://localhost:3000')
	.wait('.css-ph91xe')
	.click('#login')
	.type('#login', 'CK0236_USER')
	.click('#password')
	.type('#password', '12345678')
	.wait(1500)
	.click('.css-ph91xe')
	.wait(2000)
	.end()
	.catch((error) => {
		console.error("Automation failed on:", error);
	});
