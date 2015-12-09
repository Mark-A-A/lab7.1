window.game = {
  userCount: 0,
  computerCount: 0,
  round: 1,
};

$(document).ready(function(){
  var rockPaperScissors =["rock", "paper", "scissors"];
    console.log(rockPaperScissors);
  var userChoice;
  $("#rock").on("click", function(){
    userChoice = "rock";
  }); 
  $("#paper").on("click", function(){
    userChoice = "paper";
  }); 
  $("#scissors").on("click", function(){
    userChoice = "scissors";
  }); 



  $("#play").on("click", function(e) {
    e.preventDefault();
    alert("It works!");
    
    var computerChoice = Math.floor(Math.random()*(rockPaperScissors.length));
      console.log(computerChoice); //Testing my variable for computer's choice
    
      
    // Add logic here
    if (){

    }else if(){

    }else {

    };
  
  });



}); //end of document function