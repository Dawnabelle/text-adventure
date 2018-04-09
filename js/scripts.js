//backend & globals
var roomStartNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
var roomOneNarr = ['', 'Lying on your belly, you begin a scramble into an equally small room', 'There isn’t anything in here. Just some mushrooms on the ground and some moist moss.']
//front end
$(document).ready(function(){
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var enemy = new Enemy();
    event.preventDefault();
    $("#attack").click(function() {
      enemy.userAttack();
      player.enemyAttack();
      if (player.special >= 30) {
        $("#special").show();
      }
    });
    $("#special").click(function() {
      enemy.special();
      console.log(enemy);
      $("#special").hide();
      player.special = 0;
    });
    $(".titleCard").slideUp();
    $(".roomStart").slideDown();
  });
//start room
var indexStart = 0;
  $(".nextStart").click(function(event){
    event.preventDefault();
    indexStart +=1;
    $("#textStart").text(roomStartNarr[indexStart]);
    if(indexStart === 3){
      $(".roomStart").hide();
      $(".choiceStart").show();
    }
  });
//make sure next buttons are in the last line of the arrays
//Go left choice
  $("#leftStart").click(function(event){
    $(".choiceStart").hide();
    $(".roomOne").show();
  })
//room one
var indexOne = 0;
$(".nextOne").click(function(event){
  event.preventDefault();
  indexOne +=1;
  $("#textOne").text(roomOneNarr[indexOne]);
  if(indexStart === 3){
    $(".roomOne").hide();
    $(".choiceStart").show();
  }
});

//   $(".nextTextTwo").click(function(event){
//     event.preventDefault();
//     indexTwo +=1;
//     $(".textHere1").text(roomLeftOne[indexTwo])
//     if(indexTwo ===2){
//
//     }
//   });
});
