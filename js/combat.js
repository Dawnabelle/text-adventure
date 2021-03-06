//CHARACTER CONSTRUCTORS
function User(name) {
  this.name = name;
  this.hp = 100;
  this.damage = 0;
  this.special = 0;
  this.combatRoll = [];
}
function Enemy(name) {
  this.name = name;
  this.hp = 25;
  this.damage = 0;
  this.enemyRoll = [];
}

var roll = function() {
  return Math.floor(Math.random() * (21-1) + 1);
}

// ATTACK AND DAMAGE PROTOTYPES
//Damage that Enemy does to User
User.prototype.enemyAttack = function () {
  var combatRoll = roll();
  this.combatRoll.push(combatRoll);
  var combatText = "";
  if (combatRoll >= 19) {
    combatText = "You dodged the enemy attack!";
  } else if (combatRoll >= 17) {
    this.hp -= Math.floor(Math.random() * (9-5) + 5);
    combatText = "You blocked the enemy attack for reduced damage!";
  } else {
    return this.hp -= Math.floor(Math.random() * (16 - 10) + 10);
  }
};
//Damage that User does to Enemy
Enemy.prototype.userAttack = function () {
  var enemyRoll = roll();
  var damage = Math.floor(Math.random() * (11 - this.damage) + this.damage);
  if (enemyRoll === 20) {
    return "The enemy dodged your attack!"
  } else {
    return this.hp -= damage;
  }
};
