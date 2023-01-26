/*Create a function that moves all capital letters to the front of a word. */

function captoFront(s) {
    var sp = s.split("");
    var caps = []; 
    var lower = []
    for (var i = 0; i < sp.length; i++)
        {
            if (sp[i] == sp[i].toUpperCase()){              
                caps.push(sp[i]);
            }
            if (sp[i] == sp[i].toLowerCase()){
                lower.push(sp[i]);
            }
        }
    return caps.join("").concat(lower.join(""));
}
console.log(captoFront("hApPy"));
console.log(captoFront("moveMENT"));
console.log(captoFront("shOrtCARE"));