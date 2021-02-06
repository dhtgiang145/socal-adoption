//Dog info boxes
var dogName = ["Grey", "Snowball", "Sleepy", "Yellow", "Warmy", "Silly"]; //arrays for header dog name
var dogIntro = [
  "Grey likes natures. Green grasses, fresh flowers always make him happy. He is 40lbs",
  "Snowball is great on walks, has a lot of enery. She is 20 lbs.",
  "Sleepy, like her name, is chill and relaxed. She likes to sunbath. Sleepy is 15lbs.",
  "Yellow had a rough start and need a little bit time to get used to new place. He is 18 lbs.",
  "Warmy's ideal home is a place with calm energy. She loves to have another friend to play with. She is 10lbs.",
  "Silly is curious about anything around him. He likes to chase things and is looking for active owner. He is 21 lbs.",
]; //introduction each dog
var dogHeader = "<h2 id='dognames'>";
var headerClose = "</h2>";
var dogParagraph = "<p id='dogintro'>";
var paragraphClose = "</p>";
var introBox;
var introList = [];

//formula to assemble dog gallery open box on click
for (var i = 0; i < 6; i++) {
  introBox =
    dogHeader +
    dogName[i] +
    headerClose +
    dogParagraph +
    dogIntro[i] +
    paragraphClose +
    "<h3 id='closelink' onclick='hideIntro()'>Click this link to close</h3>";
  introList.push(introBox);
}
//<div id="doginfobox"><h2>dog name</h2><p>dog intro</p>
//<h3 id="closelink">Click this link to close</h3></div>

// function displayIntro() {
// for (var i = 0; i < 2; i++) {
//     document.getElementById("doginfobox").innerHTML = introList[i];
//   }
//   document.getElementById("doginfobox").style.visibility = "visible";
// }

function displayIntro(number) {
  document.getElementById("doginfobox").style.visibility = "visible";
  document.getElementById("doginfobox").innerHTML = introList[number];
}

function hideIntro() {
  document.getElementById("doginfobox").style.visibility = "hidden";
}

//Cat info boxes
var catName = ["Walker", "Snip", "Sunny", "Princess", "Mimi", "Black"]; //arrays for header cat name
var catIntro = [
  "Walker is a little shy, but she can get used to new environment quickly. She is 8 lbs",
  "Snip has a lot of enery and she likes to scratch things. He is 8.5 lbs.",
  "Sunny gets along well with other cats. He is 9 lbs",
  "Princess is a sweet heart and also has some heart issues that need to be monitored. She is a lovely boy and a good companion.",
  "Mimi is a smart boy and demonstrate a high intellectual level. He is 10lbs.",
  "Black eats and chews on lots of inedible things. Her ideal home would not have a lot of dangerous things around for her to ingest.",
]; //introduction each dog
var catHeader = "<h2 id='catnames'>";
var headerClose = "</h2>";
var catParagraph = "<p id='catintro'>";
var paragraphClose = "</p>";
var introBox2;
var introList2 = [];

//formula to assemble dog gallery open box on click
for (var i = 0; i < 6; i++) {
  introBox2 =
    catHeader +
    catName[i] +
    headerClose +
    catParagraph +
    catIntro[i] +
    paragraphClose +
    "<h3 id='closelink' onclick='hideCatIntro()'>Click this link to close</h3>";
  introList2.push(introBox2);
}
function displayCatIntro(number) {
  document.getElementById("catinfobox").style.visibility = "visible";
  document.getElementById("catinfobox").innerHTML = introList2[number];
}

function hideCatIntro() {
  document.getElementById("catinfobox").style.visibility = "hidden";
}
