//backend & globals
var roomOneNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
var roomLeftOne = ['', 'Lying on your belly, you begin a scramble into an equally small room', 'There isn’t anything in here. Just some mushrooms on the ground and some moist moss.']
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
    var classInput = $("#classSelect").val();
    if(classInput === "warrior") {
      var warrior = new Warrior(inputName);
    } else if (classInput === "wizard") {
      var wizard = new Wizard(inputName);
    } else {
      var thief = new Thief(inputName);
    };
    $("#special").click(function() {
      enemy.special();
      console.log(enemy);
      $("#special").hide();
      player.special = 0;
    });
    $(".titleCard").slideUp();
    $(".adventureTime").slideDown();
  });
  var indexOne = 0;
  $(".nextText").click(function(event){
    event.preventDefault();
    indexOne+=1
    $(".textHere").text(roomOneNarr[indexOne]);
    if(indexOne === 3){
      $(".choiceOne").slideDown();
      $(".nextText").slideUp();
    }
  })
//Go left
  var indexTwo = 0;
  $("#leftOne").click(function(event){
    event.preventDefault();
    $(".nextText1").show();
    $("#rightOne").hide();
    $("#leftOne").hide();
    $(".textHere").text("The path on your left leads towards a small hole, just big enough to crawl through.")
  })
})
