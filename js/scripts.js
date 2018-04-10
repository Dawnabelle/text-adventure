//backend & globals
var roomStartNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
var roomOneNarr = ['', 'Lying on your belly, you begin a scramble into an equally small room', 'There isn’t anything in here. Just some mushrooms on the ground and some moist moss.']
var roomTwoNarr = ['', 'As your eyes begin to adjust to the low light, you see a human skeleton on the floor.', 'Some how, some way, the skeleton begins to jostle.', ' It has noticed your appearance in its eternal chamber and has begun stumbling towards you.','Closer and closer it comes, readying its attack.', 'Prepare yourself for a fight!']
//front end
$(document).ready(function(){
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var enemy = new Enemy();
    var classInput = $("#classSelect").val();
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
    $("#userName").text(inputName);
    $("#classTitle").text(classInput);
    // $("#userHP").text("100" + " / " + "100")
    $(".titleCard").slideUp();
    $(".roomStart").slideDown();
    $(".userStats").slideDown();

  });
//start room
  var indexStart = 0;
  $(".nextStart").click(function(event){
    event.preventDefault();
    indexStart +=1;
    $("#textStart").text(roomStartNarr[indexStart]);
    if(indexStart === 4){
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
    if(indexOne === 3){
      $(".roomOne").hide();
      $(".turn-back").show();
    }
  });
  $(".turn-back").click(function(event) {
    event.preventDefault();
    $(".choiceStart").show();
    $("#leftStart").hide();
    $(".turn-back").hide();
  });
  // Go right choice
  $("#rightStart").click(function(event) {
    event.preventDefault();
    $(".choiceStart").hide();
    $(".roomTwo").show();
  });
  // room two
  var indexTwo = 0;
  $(".nextTwo").click(function(event) {
    indexTwo +=1;
    $("#textTwo").text(roomTwoNarr[indexTwo]);
    if(indexTwo === 5) {
    $(".nextTwo").hide();
    $(".combat").show();
    }
  });
});
