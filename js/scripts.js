$(document).ready(function() {
  $("#word-form").submit(function(event) {
    event.preventDefault();

    let inputSentence = $("input#sentence").val();
    sansVowels(inputSentence);

  });
});

function sansVowels(inputSentence) {
  const vowels = "aeiou";

  for (let i = 0; i < inputSentence.length; i += 1) {
    if (vowels.indexOf(inputSentence[i]) > -1) {
      inputSentence = inputSentence.replace(inputSentence[i], "-");
    }
  }
  console.log(inputSentence);
  alert(inputSentence);
};