let name = prompt("Assalomu alaykum ismingiz nima?");
alert(`Hurmatli ${name}, keling siz bilan "Yutaman va yutqizaman" gul bargi  o'yinini o'ynaymiz.`);
let num = +prompt(`${name} istalgan raqamni kiriting`);

if (num % 2 == 0) {
    document.write(`Hurmatli ${name} tabriklayman siz g'alaba qozondingiz !`)

} else {
     document.write(`Hurmatli ${name} siz o'yinda mag'lub bo'ldingiz!`)
}