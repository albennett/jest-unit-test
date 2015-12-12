var module = module || {};

function getInput() {
	var input = document.getElementById("input").value;
}

function checkWordCount(inputText) {
	if (inputText.split(' ').length < 100) {
		return true;
	} else {
		return false;
	}
}

function duplicateCheck(inputText) {
    for (var i = 0; i < inputText.length; i++) {
        for (var j = 0; j < inputText.length; j++) {
            if (i != j) {
                if (inputText[i] === inputText[j]) {
                        return false; 
                }
            }
        }
    }
    return true; 
}

function verifyAlphaNumeric(inputText){
	if (/^[a-z0-9]+$/i) {
			return false;
		} else {
			return true;
		}
	
}

module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric };

