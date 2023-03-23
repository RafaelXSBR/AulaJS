/*
Rafael Xavier Simões tem 38 anos, pesa 115 kg
tem 1.75 de atura e seu IMC é de
Rafael Nasceu em 1983 
*/

const nome = 'Rafael';
const sobrenome ='Xavier Simões';
const idade = 40;
const peso = 115;
const altura = 1.75;
let imc = peso/(altura*altura); // peso/(altura*altura)
let anoNascimento = 2023-idade;

//template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa, ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} Nasceu em ${anoNascimento}.`);
