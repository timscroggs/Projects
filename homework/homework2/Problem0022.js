/**
* read text input
*/
function readText(filePath) {
	var reader = new FileReader();
	reader.onload = function () {
		var text = reader.result;
		console.log(text);

		var names = [];

		names = text.split(",");
		
		var namesFinal = [];
		var nameNoParens = "";

		//this code removes the "" from each string in the array
		for (var i = 0; i < names.length; i++) {
			for (var j = 0; j < names[i].length; j++) {	
				nameNoParens = names[i].replace(/[\"\"]/g, "");
				}
			namesFinal[i] = nameNoParens;	
		}

		var namesSorted = [];
		namesSorted = namesFinal.sort();

		for(var i = 0; i<namesSorted.length; i++){
			console.log(namesSorted[i]);
		}

		console.log(namesSorted.length);

		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

		var totalSum = 0;
		var alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
		var letter = " ";
		var word = " ";
		
		//--------------------------------------------------------------------------------//

		//this function will return the value of any letter in the alphabet 
		var valueOf = function (letter) {
			for (var i = 0; i<alphabet.length; i++) {
				if (letter == alphabet[i])
					return i + 1;
			} 
		}
		
		//--------------------------------------------------------------------------------//
		
		//this function will return the value of any word in the text file
		var valueOfWord = function (word) {	
			var sum = 0;
			for (var i = 0; i < word.length; i++) {
				sum = sum + valueOf(word.charAt(i));				
			}
			return sum;
		}
		
		//--------------------------------------------------------------------------------//

		//this function will return total sum multiplying the alphabetical value of each word by its alphabetical position in the list

		var valueOfList = function() {
			for (var i = 0; i < namesSorted.length; i++) {
				totalSum = totalSum + (valueOfWord(namesSorted[i]) * (i + 1));
			}
			return totalSum;
		}
		console.log("This is the value of the list 'Name Score': " + valueOfList());

		//--------------------------------------------------------------------------------//

	};

	reader.readAsText(filePath.files[0]);	
}