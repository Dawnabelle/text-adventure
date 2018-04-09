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
User.prototype.enemyAttack = function () {
  var combatRoll = roll();
  console.log(combatRoll, "this is the user combatRoll");
  if (combatRoll >= 19) {
    this.special += 10;
    return alert("You dodged the enemy attack!");
  } else if (combatRoll >= 17) {
    this.special += 10;
    this.hp -= Math.floor(Math.random() * (6-2) + 2);
    return alert("You blocked the enemy attack for reduced damage!")
  } else {
    this.special += 10;
    return this.hp -= Math.floor(Math.random() * (9-5) + 5);
  }
};

Enemy.prototype.userAttack = function () {
  var enemyRoll = roll();
  console.log(enemyRoll, "This is the enemyRoll");
  if (enemyRoll === 20) {
    return alert("The enemy dodged your attack!")
  } else {
    return this.hp -= Math.floor(Math.random() * (11-5) + 5);
  }
};

Enemy.prototype.special = function () {
  return this.hp -= 20;
};
