

/*Create an object array named quotes that holds 5 quote objects and
  each quote has a quote property, a source property, a citation
  property (optional) and a year property (optional).
*/
var quotes = [
  {quote : "", source : "", citation : "", year : },
  {quote : "", source : "", citation : "", year : },
  {quote : "", source : "", citation : "", year : },
  {quote : "", source : "", citation : "", year : },
  {quote : "", source : "", citation : "", year : }
];

function getRandomQuote() {
  return;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
