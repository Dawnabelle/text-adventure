//backend & globals
var strikeText = ['You throw an elbow at your enemy and the hit lands heavy. You can tell you caused some damage.', 'You strike the enemy with your torch and it staggers back. It catches its footing and races towards you.', 'You lunge at your enemy with all of your might, lifting it off of its feet and slamming it into the ground.', 'Your left hook connects with the face of your foe. Causing physical and emotional damage.', 'You hammer pound your enemy on the top of the skull with audible thunk. It turns to run and you kick it in the back.', 'You hit the enemy and it stumbles. It regains its composure and quickly reaches for you. What do you do now?']
var missText = ['You slip as you move to strike and your hit doesn’t land. Try to hit it again?', 'Your punch lands short. You’ve done no damage.', 'Your kick doesn’t connect. The enemy has taken no damage.', 'Your enemy darts aside and you stumble past it clumsily.', 'You under reach and your attack doesn’t connect.']
var dodgeText = ['With the grace of a ferret, you dart behind a narrow chasm and your enemy slams his fist in the wall.', 'You spin to your right and avoid your enemy’s attack.', 'You duck, narrowly missing a heavy through from your enemy.', 'You jump back and watch as your attackers punch just misses your gut.', 'Your enemy throws a punch and while you go to block, you slip. This send your enemy tumbling over you, giving you a chance to hold your ground.']
var roomStartNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
var roomOneNarr = ['', 'Lying on your belly, you begin a scramble into an equally small room', 'There isn’t anything in here. Just some mushrooms on the ground and some moist moss.']
var roomTwoNarr = ['', 'As your eyes begin to adjust to the low light, you see a human skeleton on the floor.', 'Some how, some way, the skeleton begins to jostle.', ' It has noticed your appearance in its eternal chamber and has begun stumbling towards you. Closer and closer it comes, readying its attack.', 'Prepare yourself for a fight!']
//front end
$(document).ready(function(){
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var enemy = new Enemy();
    event.preventDefault();

    $("#attack").click(function() {
      enemy.userAttack();
      $(".combat-text").text(strikeText[Math.floor(Math.random()*strikeText.length)]);
      player.enemyAttack();
      $("#textTwo").hide();
      $(".combat-text").show();
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
    if(indexTwo === 4) {
    $(".nextTwo").hide();
    $(".combat").show();
    $(".combat-text").hide();
    }
  });
});
