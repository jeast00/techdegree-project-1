

/*
  Create an object array named quotes that holds 5 quote objects and
  each quote has a quote property, a source property, a citation
  property (optional) and a year property (optional).
*/
var quotes = [

  {
    quote : "Alrighty then!",
    source : "Ace Ventura",
    citation : "Ace Ventura, Pet Detective",
    year :
  },

  {
    quote : "If you're going through Hell, keep going.",
    source : "Winston Churchill",
    citation : "",
    year :
  },

  {
    quote : "Accept the challenges so that you can feel the exhilaration of victory.",
    source : "George S. Patton",
    citation : "",
    year :
  },

  {
    quote : "I'll be back.",
    source : "The Terminator",
    citation : "Terminator 2: Judgement Day",
    year : 1991
  },

  {
    quote : "It is during our darkest moments that we must focus to see the light.",
    source : "Aristotle",
    citation : "",
    year :
  }

];

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length) + 1;
  return randomQuote;
}

function printQuote() {


}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
