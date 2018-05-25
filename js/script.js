// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
  Create an object array named quotes that holds 5 quote objects and
  each quote has a quote property, a source property, a citation
  property (optional) and a year property (optional).
*/
var quotes = [
  {
    quote : "Alrighty then!",
    source : "Ace Ventura",
    citation : "Ace Ventura, Pet Detective"
  },
  {
    quote : "If you're going through Hell, keep going.",
    source : "Winston Churchill"
  },
  {
    quote : "Accept the challenges so that you can feel the exhilaration of victory.",
    source : "George S. Patton"
  },
  {
    quote : "I'll be back.",
    source : "The Terminator",
    citation : "Terminator 2: Judgement Day",
    year : 1991
  },
  {
    quote : "It is during our darkest moments that we must focus to see the light.",
    source : "Aristotle"
  }
];

/*
  Create a function named getRandomQuote that returns a random quote from the
  quotes object array
*/
function getRandomQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
}

/*
  Create a function named printQuote that calls the function getRandomQuote,
  add it to a variable, and print out the quote.
*/

function printQuote() {
    var quoteInfo = getRandomQuote();
    var html = '<p class="quote">' + quoteInfo.quote + '</p>';
        html += '<p class="source">' + quoteInfo.source + '</p>';

  // '<span class="citation">' + quoteInfo.citation + '</span>'
  // '<span class="year">' + quoteInfo.year + '</span>'

    var quoteboxDiv = document.getElementById("quote-box");
    quoteboxDiv.innerHTML = html;
}
