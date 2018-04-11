//backend & globals
var strikeText = ['You throw an elbow at your enemy and the hit lands heavy. You can tell you caused some damage.', 'You strike the enemy with your torch and it staggers back. It catches its footing and races towards you.', 'You lunge at your enemy with all of your might, lifting it off of its feet and slamming it into the ground.', 'Your left hook connects with the face of your foe. Causing physical and emotional damage.', 'You hammer pounds your enemy on the top of the skull with audible thunk. It turns to run and you kick it in the back.', 'You hit the enemy and it stumbles. It regains its composure and quickly reaches for you.']
var missText = ['You slip as you move to strike and your hit doesn’t land. Try to hit it again?', 'Your punch lands short. You’ve done no damage.', 'Your kick doesn’t connect. The enemy has taken no damage.', 'Your enemy darts aside and you stumble past it clumsily.', 'You under reach and your attack doesn’t connect.']
var dodgeText = ['With the grace of a ferret, you dart behind a narrow chasm and your enemy slams his fist in the wall.', 'You spin to your right and avoid your enemy’s attack.', 'You duck, narrowly missing a heavy throw from your enemy.', 'You jump back and watch as your attacker\'s punch just misses your gut.', 'Your enemy throws a punch and while you go to block, you slip. This send your enemy tumbling over you, giving you a chance to hold your ground.']
var enemyStrikeText = ['With stunning force, the enemy lunges and hits you with all of its might.', 'The enemy bludgeons you with its spiky club.', 'Your enemy swings a giant club your way, connecting with your shoulder and sending waves of shock through your body.', 'You kick at the skeleton and miss. It throws you against the wall with it’s boney arms. ', 'The enemy claws you with its dirty, stinky talons.','The enemy’s forceful blow knocks the breath right out of your lungs. Gasping, you roll out of the way before it hits you again.', 'The enemy kicks you in the knee and laughs as you fall to the floor.'
]
var roomStartNarr =['','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
var roomOneNarr = ['', 'Lying on your belly, you begin a scramble into an equally small room', 'There isn’t anything in here. Just some mushrooms on the ground and some moist moss.']
var roomTwoNarr = ['', 'As your eyes begin to adjust to the low light, you see a human skeleton on the floor.', 'Some how, some way, the skeleton begins to jostle.', ' It has noticed your appearance in its eternal chamber and has begun stumbling towards you.','Closer and closer it comes, readying its attack.', 'Prepare yourself for a fight!']
var roomTwoAfterFight = ['', 'You rest a minute and try to collect your feelings.', 'What just happened?', 'The scattered bones move no more.', 'Sensing no other immediate threat, you proceed.']
var roomThreeNarr = ['', 'Holding your breath, scared and nervous, you progress deeper into the cavern.', 'There are no enemies in this room, save the path itself.', 'A rickety bridge is in front of you and is the only way across.', 'You step out with your right foot and the bridge begins to sway.', 'Anxiously, you press on.']
var roomFourNarr = ['','A slimy, toothy creature stands in your path, fresh blood drips from its mouth.','With a terrifying roar, your enemy runs towards you.', 'Do you stay and fight?']
//front end
$(document).ready(function(){
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var skeletor = new Enemy("Skeletor");
    var slimeguy = new Enemy("Slimeguy");
    var classInput = $("#classSelect").val();
    event.preventDefault();
    $("#attack").click(function() {
      $("#textTwo").hide();
      $("#userHP").text(player.hp)
      $(".combat-text").show();
      skeletor.userAttack();
      if ((skeletor.enemyRoll[skeletor.enemyRoll.length-1]) === 20) {
        $(".combat-text").text("The enemy dodged your attack");
      } else {
        $(".combat-text").text(strikeText[Math.floor(Math.random()*strikeText.length)]);
      }
      player.enemyAttack();
      if ((player.combatRoll[player.combatRoll.length-1]) >= 19) {
        $(".enemy-text").text(dodgeText[Math.floor(Math.random()*dodgeText.length)]);
      } else if ((player.combatRoll[player.combatRoll.length-1]) >= 17) {
        $(".enemy-text").text("You blocked the attack");
      } else {
        $(".enemy-text").text(enemyStrikeText[Math.floor(Math.random()*enemyStrikeText.length)]);
      }
      if (skeletor.hp <= 0) {
        $(".combat-text").text('You hit the skeleton with so much force, it cascades boney shards in every direction.');
        $(".enemy-text").hide();
        $("#attack").hide();
        $(".afterFight").show();
      }
    });
    if(classInput === "warrior") {
      var warrior = new Warrior();
      player.hp = warrior.health;
      player.damage = warrior.damage;
      skeletor.damage = player.damage;
      slimeguy.damage = player.damage;
    } else if (classInput === "wizard") {
      var wizard = new Wizard();
      player.hp = wizard.health;
      player.damage = wizard.damage;
      skeletor.damage = player.damage;
      slimeguy.damage = player.damage;
    } else {
      var thief = new Thief();
      player.hp = thief.health;
      player.damage = thief.damage;
      skeletor.damage = player.damage;
      slimeguy.damage = player.damage;
    };

    $("#userName").text(inputName);
    $("#classTitle").text(classInput);
    $("#userHP").text(player.hp)
    $(".titleCard").slideUp();
    $(".roomStart").slideDown();
    $(".userStats").slideDown();


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
  // room two (combat Room)
  var indexTwo = 0;
  $(".nextTwo").click(function(event) {
    indexTwo +=1;
    $("#textTwo").text(roomTwoNarr[indexTwo]);
    if(indexTwo === 5) {
    $(".nextTwo").hide();
    $(".combat").show();
    $(".combat-text").hide();
    }
  });
  //after fight before room 3
  var indexAfterTwoFight = 0;
  $(".afterFight").click(function(event) {
    $(".combat-text").hide();
    indexAfterTwoFight +=1;
    $("#afterFightText").text(roomTwoAfterFight[indexAfterTwoFight]);
    if (indexAfterTwoFight === 4) {
      $(".afterFight").hide();
      $(".roomThree").show();
      $(".nextThree").show()
    }
  });
  //room three
  var indexThree = 0;
  $(".nextThree").click(function(event){
    event.preventDefault();
    $("#afterFightText").hide()
    indexThree +=1;
    $("#textThree").text(roomThreeNarr[indexThree]);
    if(indexThree === 6){
      $(".roomThree").hide();
      $(".nextThree").hide();
      $(".roomFour").show();
      $("#textFour").show();
      $(".nextFour").show();
    }
  });
  // room four
  var indexFour = 0;
  $(".nextFour").click(function(event) {
    $("#textThree").hide();
    indexFour +=1;
    $("#textFour").text(roomFourNarr[indexFour]);
    if(indexFour === 3) {
      $(".nextFour").hide();
      $("#textFour").hide();
      $(".combat2").show();
    }
  });
  // combat 2
  $("#attack2").click(function(event) {
    $(".combat2-text").show();
    $("#userHP").text(player.hp)
    slimeguy.userAttack();
    if ((slimeguy.enemyRoll[slimeguy.enemyRoll.length-1]) === 20) {
      $(".combat2-text").text("The enemy dodged your attack!")
    } else {
      $(".combat2-text").text(strikeText[Math.floor(Math.random()*strikeText.length)]);
    }
    player.enemyAttack();
    if ((player.combatRoll[player.combatRoll.length-1]) >= 19) {
      $(".enemy2-text").text(dodgeText[Math.floor(Math.random()*dodgeText.length)]);
    } else if ((player.combatRoll[player.combatRoll.length-1]) >= 17) {
      $(".enemy2-text").text("You blocked the attack");
    } else {
      $(".enemy2-text").text(enemyStrikeText[Math.floor(Math.random()*enemyStrikeText.length)]);
    }
    if (slimeguy.hp <= 0) {
      $(".combat2-text").text('You obliterated the slime!');
      $(".enemy2-text").hide();
      $("#attack2").hide();
    }
  });
  });
});
