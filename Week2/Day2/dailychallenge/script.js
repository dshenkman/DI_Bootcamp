let sentence = "The peppers are not that bad , everyone liked them"
let sentence_array = sentence.split(" ");
let wordNot = sentence_array.indexOf("not");
console.log(wordNot)
let wordBad = sentence_array.indexOf("bad");
console.log(wordBad) 




if (wordNot < wordBad && wordNot != -1 && wordBad != -1){
	sentence_array.splice(wordNot, wordBad - wordNot + 1 , "good")
  	let new_Sentence = sentence_array.join(" ")
	console.log(new_Sentence)
}