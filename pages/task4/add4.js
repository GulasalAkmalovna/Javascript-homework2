let name = prompt("Ismingizni kiritintg");
let listening = +prompt("Listeningdan olgan balingizni kiriting");
let reading = +prompt("Reading dan olgan balingizni kiriitng");
let writing = +prompt("Writing dan olgan balingizni kiriitng");
let speaking = +prompt("Speaking dan olgan balingizni kiriitng");
let result = ( listening + reading + writing + speaking)/4 ;
if ( result < 6) {
    document.write(`${name}, YAXSHIROQ O'QISANGIZ BO'LMASMIDI?  OVERAL: ${result} OLDINGIZ.`)

} else if (result >= 6 && result <= 7) {
     document.write(`${name} TABRIKLAYMIZ OVERAL: ${result} TO'PLANDINGIZ`)

}else if (result >= 7.1 && result <= 8) {
     document.write(`${name} SIZ DARSLARDA MA'SULIYAT BILAN QATNASHDINGIZ VA TABRIKLAYMIZ OVERAL: ${result} TO'PLANDINGIZ. OTA-ONANGIZGA RAHMAT !`)
}
