window.game = {
  userCount: 0,
  computerCount: 0,
  round: 1,
};

$(document).ready(function(){
  var rockPaperScissors =["rock", "paper", "scissors"];
    console.log(rockPaperScissors);
  var userChoice =0 ;
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
    alert("It works! You picked "+ userChoice);
    
    var computerChoice = Math.floor(Math.random()*(rockPaperScissors.length));
      console.log(computerChoice); //Testing my variable for computer's choice
      console.log(userChoice);
      
    /* Add logic here
    if (){

    }else if(){

    }else {

    };
  */
  });



}); //end of document function