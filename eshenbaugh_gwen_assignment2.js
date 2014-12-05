// Gwen Eshenbaugh
// SDI 1411
// Project 2


//backstory for game idea 1: Nightmares?/Portals?/Dream Conquerer? -
//You and your companion (daughter, son, wife, husband, friend) have gone from a simple day of shopping to
//a jungle portal. The exit has vanished. People are running and screaming. Everyone is
//in complete panic. In the distance you can hear the growls of a mystery creature; the
//sounds are getting closer. How will you find safety? The fate of the situation will be
//determined by your actions. Act bravely.

//Start>Enter Mall>you notice right away that the mall is not a mall>turn toward the
//entrance which seals, then disappears. So, entrance gone...you can only move forward.


// Variables: Declare
var currentSituation;
var immediateThreat;
var getStarted;
var reactionTime;
var theDirection;

// Variables: Assign Values
currentSituation = "You are locked inside of the jungle portal the only way out of it, is through it.You witness panicked people running";
immediateThreat = "Terrifying growls are closing in on your current location";
getStarted = "Let\'s get started";
reactionTime = "You have 3 minutes to grab gear and run for your life";
theDirection = true;

// Variables: Assign Literal Value - this causes the alert box to appear.
alert(currentSituation);
alert(immediateThreat);
alert(getStarted);
alert(reactionTime);
alert(theDirection);
// Initial outputs
console.log("So, the issue is that we are " + currentSituation + ".");
console.log("Next thing we notice is that there were " +  immediateThreat + ".");
console.log("We hear an announcement we have " +  reactionTime + " minutes to act and it starts to count down.");
console.log("It is " +  theDirection + " that the growls are coming form the left and people are running right.");

// prompt
//function myFunction() {
//var choice =
//prompt("Times up!", "left or right?");

  //if (choice right = null) {

    //var choice = prompt("Hope you chose wisely...proceed " + choice + "! You have 5 more minutes to reach the next checkpoint...so run!");
//  }
//}


// conditional
if (theDirection == true) {
  //If direction is true, we run this code
  console.log("We will run right.");
} else {
  //if the direction is false, we run this code
  console.log("We will run left.");
}
