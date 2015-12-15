window.game = {
  userCount: 0,
  computerCount: 0,
  round: 1,

};
 

 //Adding Animation
 $(window).scroll(function() {
    $('#animatedElement').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideUp");
      }
    });
  });

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


  //Rok Paper Scissors Game Function
  $(".play").on("click", function(e) {
    e.preventDefault();
    alert("You picked "+ userChoice);
/*
    var button = $(event.relatedTarget) // Button that triggered the modal
    console.log(button);
    var choicePicked = button.data("picked") // Extract info from data-* attributes
    console.log(choicePicked);
    var modal = $(this);
    console.log(modal);
*/

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
      
      //alert("User was smothered by Computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You were smothered by Computer's paper.");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      //$(".modal-content").text("User was smothered by Computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      
      
      $("#comp-score").html(game.computerCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);
      
    }else if(userChoice === 0 && computerChoice === 2 ){
      console.log("user picked rock, computer picked scissors.");
      game.userCount++;
      
      //alert("user smashed scissors. The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("user smashed scissors. The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You smashed scissors!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      $("#your-score").html(game.userCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);

    }else if(userChoice === 1 && computerChoice === 0){
      console.log("user picked paper, computer picked rock");
      game.userCount++;
      
      //alert("User covered rock. The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("User covered rock. The score is: " + game.userCount + " | " + game.computerCount);
      //modal.find("modal-content").text("User covered rock. The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You covered rock!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      $("#your-score").html(game.userCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);

    }else if(userChoice === 1 && computerChoice === 2){
      console.log("user picked paper, computer picked scissors.");
      game.computerCount++;
      
      //alert("User was cut up by Computer's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("User was cut up by Computer's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      //modal.find("modal-content").text("User was cut up by Computer's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You were cut up by Computer's scissors.!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      $("#comp-score").html(game.computerCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);

    }else if(userChoice === 2 && computerChoice === 0){
      console.log("user picked scissors, computer picked rock.");
      game.computerCount++;
      
     // alert("Computer smashed user's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("Computer smashed user's scissors. The score is: " + game.userCount + " | " + game.computerCount);
      $(".modal-title").text("The computer smashed your scissors!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      $("#comp-score").html(game.computerCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);

    }else if(userChoice === 2 && computerChoice === 1){
      console.log("user picked scissors, computer picked paper");
      game.userCount++;
      //alert("User shredded computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("User shredded computer's paper. The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You shredded computer's paper!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      $("#your-score").html(game.userCount);
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);

    } else if ( userChoice === computerChoice) {
      console.log("you both picked the same thing.");
      //alert("you tied.  The score is: " + game.userCount + " | " + game.computerCount);
      //$(".modal-content").text("you tied.  The score is: " + game.userCount + " | " + game.computerCount);
      
      $(".modal-title").text("You both chose the same thing!");
      $(".modal-score").text("The score is " + game.userCount + " | " + game.computerCount)
      
      game.round++;
      console.log(game.round);
      $("#round-count").html(game.round);
    };

    //Game Winner
    if (game.userCount === 3){
      alert("You Win");
    } else if(game.computerCount === 3) {
      alert("computer wins- try again");
    };

    /*if(game.round ===5){
      return round;
    } else if (){

    }; */
  });



}); //end of document function