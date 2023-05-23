//const pessoa1 = {
  //  nome: 'Luiz', 
    //sobrenome: 'Miranda',
    //idade: 25
//};

//console.log(pessoa1.nome);
//console.log(pessoa1.sobrenome);

//function criaPessoa (nome, sobrenome, idade) {
    //return{
     //   nome, sobrenome, idade
   // };
//}

//const pessoa1 = criaPessoa('Luiz', 'miranda', 25);
//const pessoa2 = criaPessoa('maria', 'oliveira', 32);
//const pessoa3 = criaPessoa('joao', 'otavio', 45);
//const pessoa4 = criaPessoa('junior', 'lara', 68);
//const pessoa5 = criaPessoa('jean', 'moraes', 10);

//console.log(pessoa1.nome, pessoa2.sobrenome);

const pessoal = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}. `);
    },

    incrementaIdade(){
        this.idade++;
    }

};

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
