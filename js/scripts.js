$(document).ready(function() {
  $("#word-form").submit(function(event) {
    event.preventDefault();

    let inputSentence = $("input#sentence").val();
    let result = sansVowels(inputSentence);
    alert(result);

  });
});

function sansVowels(inputSentence) {
  let sentenceWithoutVowels = [];
  const vowels = "aeiou";

  for (var i = 0; i < inputSentence.length; i += 1) {
    if (vowels.indexOf(inputSentence[i]) > -1) {
      inputSentence = inputSentence.replace(inputSentence[i], "-");
    }
  }
  console.log(inputSentence);
  sentenceWithoutVowels = inputSentence.split(" ");
  return sentenceWithoutVowels;
};