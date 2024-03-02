const ascii0 = 32;
    const asciiEnd = 126;
    const asciiRange = (asciiEnd - ascii0) + 1;

function coding (str){
    const shiftValue = Math.round(Math.sin(str.length)*str.length);
        var newStr = '';
        for (var i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);        
            const shiftedCharCode = ((charCode - ascii0 + shiftValue) % asciiRange + asciiRange) % asciiRange + ascii0;
            newStr += String.fromCharCode(shiftedCharCode);
        }

        return newStr;
};

function decoding(str){
    const shiftValue = Math.round(Math.sin(str.length)*str.length);
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);        
        const unshiftedCharCode = ((charCode - ascii0 - shiftValue) % asciiRange + asciiRange) % asciiRange + ascii0;
        newStr += String.fromCharCode(unshiftedCharCode);
    }
    return newStr;
};

// Pega o input do id textInputArea; e o output de textOutputArea
const input = document.getElementById("textInputArea");
const outputParagraph = document.getElementById("textOutputArea");
const checkbox = document.getElementById("codeORdecode");
const tag = document.getElementById("tag");

// Add event listener for the input event on the input field
input.addEventListener("input", function() {

    if (checkbox.checked) {
        outputParagraph.textContent = decoding (input.value);
        tag.textContent= "Decodificando Mensagem..."
    } else {
        outputParagraph.textContent = coding (input.value);
        tag.textContent="Codificando Mensagem..." 
    }
    // Update the text content of the paragraph with the value of the input field
});
