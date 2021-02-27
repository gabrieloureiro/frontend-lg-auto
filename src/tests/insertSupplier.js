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

	.wait('#suppliers')
	.wait(1500)
	.click('#suppliers')

	.wait('.css-1vjlkep-Button')
	.wait(1500)
	.click('.css-1vjlkep-Button')

	.wait(1000)
	.click('#company_name')
	.type('#company_name', 'EMPRESA TESTE CK0236 01 01')
	.click('#person_in_charge')
	.type('#person_in_charge', 'ENCARREGADO TESTE')
	.click('#email')
	.type('#email', 'emailteste@teste.com')
	.click('#cpf')
	.type('#cpf', '098.098.091-09')
	.click('#cnpj')
	.type('#cnpj', '09.098.098/08001-09')
	.wait(1500)
	.click('.css-qk2zv7')
	.refresh()
	.wait(3000)
	.end()
	.catch((error) => {
		console.error("Automation failed on:", error);
	});
