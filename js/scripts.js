// BACK END

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
  return this.hp -= Math.floor(Math.random() * (9-5) + 5);
};

Enemy.prototype.userAttack = function () {
  return this.hp -= Math.floor(Math.random() * (11-5) + 5);
};


// USER INTERFACE
