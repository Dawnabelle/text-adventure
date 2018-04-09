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
// ATTACK AND DAMAGE PROTOTYPES
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
