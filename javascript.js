var quotes = [
  "Wait, you're not done building it!? -KingSwagus",
  "Dude it's fine I got this -Luvonox",
  "Some people are like slinkies. They aren't really good for anything, but it brings a smile to your face when you push them down a flight of stairs. -Unknown",
  "Bruh... -People in North Korea",
  "That math problem dude be livin in a watermelon house -3rd Grader",
  "Who ate my cat? -Unknown",
  "Dang I love running, it really warms me up! -Anonymous Refrigerator",
  "Subscribe to 182exe! -Dream (definitely)",
  "You smell... like a baka... -Erin Yaeger",
  "WAIT HE DIDN'T DIE!? -Every skywars player ever",
  "You can't say that, that's racist! -Twitter",
  "oh... could you be... the Sussus, Amongus, Imposter!? -Gabe",
  "Are you domb -KSI",
  "These orphans are gettin' destroyed -Technoblade",
  "Memes are dumb -Reddit",
  ";l;;gmlxzssaw. -US Strategetic Command on Twitter",
  "H -h",
  "Very Inspiring! -Cool Kid",
  "Racism is really stupid, and the fact that it's still in this world and being taught is insane to me. -Unknown",
  "Bro stop putting the cereal in the fridge -David",
  "Bean Burrito -David",
  "No, I don't think I will. -i forgor",
  "Don't be polite. -AI Quote Generator",
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}