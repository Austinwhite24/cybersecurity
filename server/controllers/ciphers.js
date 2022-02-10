
// my cipher is a secert code that is like the ceaser code and will just take in any characters in the alphabet and shift over 4 spots and its wrapped from a-z

// I love cryptography!
// m pszi gvctxsuvetlc!

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

function shift(n){
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}
function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}
function decode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}
console.log(encode('austinwhite'))
console.log