const name = prompt("Ismingizni kiriting");
let sum = prompt(`${name} uzingizda mavjud pulni kiriting`)
let dollar = 11000.34;
let euro = 12354.03;
let ticket = 500 * dollar;
let hotel = 250 * dollar;
let museum = 120 * euro;
let result = ticket + hotel + museum;

if (sum >= result) {
    document.write(`${name} safaringiz maroqli o'tsin. \n OQ YO'L !`)
} else {
    document.write(`Afsus ${name}  , biroz sabr qilar ekansiz .`)
}

console.log(result)