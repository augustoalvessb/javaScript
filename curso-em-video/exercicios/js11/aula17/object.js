let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 62.9,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
};

amigo.engordar(-6)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);