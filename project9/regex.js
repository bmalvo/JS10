/* WZORZEC */
// idealne dopaswowanie

// console.log(/aB1/.test('a'));
// console.log(/aB1/.test('ab1'));
// console.log(/aB1/i.test('ab1'));
// console.log(/aB1/.test('aB21'));
// console.log(/aB1/.test('CaB12'));

/* SKRÓTY */

// \d dowolna cyfra z predziały 0-9
// \D znak inny niż cyfra

// console.log(/\d/.test('2'));
// console.log(/\d/.test('12'));
// console.log(/\D/.test('12'));
// console.log(/\d\d\d/.test('abc123cbz'));

// \w dowolny znak alfanumeryczny
// \W dowolny znak niebędący alfanumeryczny

// console.log(/\w\w\-\d\d\d\d/.test('ab-2345'));
// console.log(/\W\W/.test('ąż'));

// \s dowolny biały znak
// \S dowolny nie-biały znak

// console.log(/\s/.test('ala ma kota'));
// console.log(/\S/.test('ala ma kota'));

// . każdy znak poza nowym wierszem

// console.log(/./.test(','));

// [] dowolny znak wewnątrz nawiasu

// console.log(/[abc]/.test('efg'));

// {x,y} ilość powtórzeń od x do y razy

// console.log(/a{2,4}/.test('abacaa'));

// ? poprzedni znak występuje 0 lub 1 raz

// console.log(/ala?/.test('al'));

// + poprzedni znak występuje raz lub więcej

// console.log(/pu+la/.test('puula'));

// ^ negacja-odwrotność tego co w nawiasie
// $ znak końca wyrażenia

// warto wiedzieć
// \w === [a-zA-Z0-9_]
// \W === [^a-zA-Z0-9_]
// \d === [0-9]
// \D === [^0-9]