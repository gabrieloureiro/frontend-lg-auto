const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true, width: 1920, height: 1070 });


nightmare
	.goto('http://localhost:3000')
	.wait('.css-7ddfio')
	.wait(1500)
	.click('.css-7ddfio')
	.wait('.css-1g1tbaj')
	.wait(1500)
	.click('.css-1g1tbaj')
	.wait('.css-1kp5y9j')
	.wait(2000)
	.click('#company_name')
	.type('#company_name', 'EMPRESA TESTE CK0236')
	.click('#person_in_charge')
	.type('#person_in_charge', 'ENCARREGADO TESTE')
	.click('#email')
	.type('#email', 'emailteste@teste.com')
	.click('#cpf')
	.type('#cpf', '098.098.098-09')
	.click('#cnpj')
	.type('#cnpj', '09.098.098/00001-09')
	.wait(1500)
	.click('.css-bgw2t7')
	.refresh()
	.wait(3000)
	.end()
	.catch((error) => {
		console.error("Automation failed on:", error);
	});
