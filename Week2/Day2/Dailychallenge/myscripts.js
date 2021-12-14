let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.search("not");
let wordBad = sentence.search("bad");
console.log(wordNot);
console.log(wordBad);
let diff = wordBad - wordNot;

if (wordBad > wordNot) {
	let cut = sentence.substr(wordNot, diff +3);
	console.log(sentence);
	sentence = sentence.replace(cut, "good");
	console.log(sentence);
} else {
	console.log(sentence)
}
