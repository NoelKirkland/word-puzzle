$(document).ready(function() {
  $("#word-form").submit(function(event) {
    event.preventDefault();

    let inputSentence = $("input#sentence").val();
    const inputWords = inputSentence.split(" ");

    function sansVowels(inputWords) {
      let sentenceWithoutVowels = []
      const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
      for(index = 0; index < inputWords.length; index += 1) {
        if (vowels.index(string[index])<0){
          sentenceWithoutVowels.push(string[index])
        }
      }
    }
console.log();
    
  });
});