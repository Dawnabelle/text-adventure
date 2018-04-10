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

var roll = function() {
  return Math.floor(Math.random() * (21-1) + 1);
}


// ATTACK AND DAMAGE PROTOTYPES

//Damage that Enemy does to User
User.prototype.enemyAttack = function () {
  var combatRoll = roll();
  var combatText = "";
  console.log(combatRoll, "this is the user combatRoll");
  if (combatRoll >= 19) {
    this.special += 10;
    combatText = "You dodged the enemy attack!";
    console.log(combatText);
  } else if (combatRoll >= 17) {
    this.special += 10;
    this.hp -= Math.floor(Math.random() * (6-2) + 2);
    combatText = "You blocked the enemy attack for reduced damage!";
  } else {
    this.special += 10;
    return this.hp -= Math.floor(Math.random() * (9-5) + 5);
  }
};
//Damage that User does to Enemy
Enemy.prototype.userAttack = function () {
  var enemyRoll = roll();
  var damage = Math.floor(Math.random() * (11-5) + 5);
  console.log(enemyRoll, "This is the enemyRoll");
  if (enemyRoll === 20) {
    return "The enemy dodged your attack!"
  } else {
    return this.hp -= damage;
  }
};

Enemy.prototype.special = function () {
  return this.hp -= 20;
};
