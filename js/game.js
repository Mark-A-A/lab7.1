window.game = {
  userCount: 0,
  computerCount: 0,
  round: 1,

};

$(document).ready(function(){
  var rockPaperScissors =["rock", "paper", "scissors"];
  var userChoice =0 ;  
  var computerChoice=0;

  console.log(rockPaperScissors);
  
  $("#rock").on("click", function(){
    //alert("you picked rock!");
    userChoice = "rock";
    //console.log(userChoice);

  }); 

  $("#paper").on("click", function(){
    //alert("you picked paper!");
    userChoice = "paper";
    //console.log(userChoice);
    
  });

  $("#scissors").on("click", function(){
    //alert("you picked scissors!");
    userChoice = "scissors";
    //console.log(userChoice);
  }); 



  $(".play").on("click", function(e) {
    e.preventDefault();
    alert("You picked "+ userChoice);
    
    computerChoice = Math.floor(Math.random()*(rockPaperScissors.length));
    console.log(computerChoice); //Testing my variable for computer's choice
      
    if (userChoice==="rock"){
      userChoice = 0;
    }else if(userChoice==="paper"){
      userChoice =1;
    } else {
      userChoice = 2;
    };
  

    console.log(userChoice);     //Testing my variable for user's Choice
    

    //Add logic here
    

    // rock = 0
    // paper = 1
    // scissors =2

    if (userChoice === 0  && computerChoice === 1){ // 
      console.log("user picked rock, computer picked paper");
      game.computerCount++;
      alert("User was smothered by Computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      $("#comp-score").html(game.computerCount);
      
    }else if(userChoice === 0 && computerChoice === 2 ){
      console.log("user picked rock, computer picked scissors.");
      game.userCount++;
      alert("user smashed scissors. The score is: " + game.userCount + " | " + game.computerCount);
      $("#your-score").html(game.userCount);

    }else if(userChoice === 1 && computerChoice === 0){
      console.log("user picked paper, computer picked rock");
      game.userCount++;
      alert("User covered rockk. The score is: " + game.userCount + " | " + game.computerCount);
      $("#your-score").html(game.userCount);

    }else if(userChoice === 1 && computerChoice === 2){
      console.log("user picked paper, computer picked scissors.");
      game.computerCount++;
      alert("User was cut up by Computer's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      $("#comp-score").html(game.computerCount);

    }else if(userChoice === 2 && computerChoice === 0){
      console.log("user picked scissors, computer picked rock.");
      game.computerCount++;
      alert("Computer smashed user's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      $("#comp-score").html(game.computerCount);

    }else if(userChoice === 2 && computerChoice === 1){
      console.log("user picked scissors, computer picked paper");
      game.userCount++;
      alert("User shredded computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      $("#your-score").html(game.userCount);

    } else if ( userChoice === computerChoice) {
      console.log("you both picked the same thing.");
      alert("you tied.  The score is: " + game.userCount + " | " + game.computerCount);
    };

    //Game Winner
    if (game.userCount === 3){
      alert("You Win");
    } else if(game.computerCount === 3) {
      alert("computer wins- try again");
    };

  });



}); //end of document function