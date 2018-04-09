
// BACK END
function attackDialogue() {
  this.attack = [];
};
attackDialogue.prototype.hit = function () {
  var hit = "You hit the skeleton for so much damage that it burst into pieces";
  this.attack.push(hit);
};
function damageDialogue() {
  this.damage = [];
};
damageDialogue.prototype.damage = function () {
  var damage = "You took damage";
  this.damage.push(damage);
};

//CHARACTER CONSTRUCTORS
function User(name) {
  this.name = name;
  this.hp = 100;
  this.special = 0;
}

function Enemy() {
  this.name = "Sparky";
  this.hp = 25;
}


//COMBAT PROTOTYPES
  // user attack
User.prototype.enemyAttack = function () {
  this.special += 10;
  return this.hp -= Math.floor(Math.random() * (9-5) + 5);
};

Enemy.prototype.userAttack = function () {
  return this.hp -= Math.floor(Math.random() * (11-5) + 5);
};

Enemy.prototype.special = function () {

  return this.hp -= 20;
};


// USER INTERFACE

$(function() {
  $("#start").submit(function(event) {
    var inputName = $("#name").val();
    var player = new User(inputName);
    var enemy = new Enemy();
    event.preventDefault();
    console.log(player);
      $("#attack").click(function() {
        enemy.userAttack();
        player.enemyAttack();
        console.log(player);
        console.log(enemy);
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
  });
});
