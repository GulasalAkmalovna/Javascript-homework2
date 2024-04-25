alert(" Tavsiya etiladigan so'zlar: \n mo'jiza , tabiat , sabr, intizom, salom, ajoyib, go'zal,shifo, tabassum, olg'a")
const word = prompt("So'z kiriting");

if (word == "mo'jiza") {
    document.write(`${word} - A miracle`)

} else if (word == "tabiat") {
    document.write(` ${word} - Nature`)

}else if (word == "sabr") {
    document.write(` ${word} - patience`)

}else if (word == "intizom") {
    document.write(` ${word} - discipline`)

}else if (word == "salom") {
    document.write(` ${word} - Hello`)

}else if (word == "ajoyib") {
    document.write(` ${word} - great , wonderful`)

}else if (word == "go'zal") {
    document.write(`${word} - beautiful , beauteous`)

}else if (word == "shifo") {
    document.write(`healing`)

}else if (word == "tabassum") {
    document.write(`${word} - smile`)

}else if (word == "olg'a") {
    document.write(`${word} - forward`)
} else{
    document.write("Iltimos boshqa so'z kiriting")
}
