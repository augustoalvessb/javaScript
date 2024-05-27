let num = [5, 2, 7, 0, 1];

num[3] = 6;

num.push(9, 16);

console.log(`Nosso valor é o ${num} '${num.length}'.`);

/* for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem os valores${num[i]}`);
}*/

for (let pos in num) {
    console.log(`A posição ${pos} tem os valores ${num[pos]}`)
}
num.sort();
let pas = num.indexOf(2);

if (pas == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor está na posição ${pas}.`)
}