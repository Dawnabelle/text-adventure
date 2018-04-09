function Warrior(name) {
  this.name = name;
  this.charClass = "Warrior";
  this.health = 100;
  this.damage = 5;
  this.special = 0;
}
function Wizard(name) {
  this.name = name;
  this.charClass = "Wizard";
  this.health = 70;
  this.damage = 8;
  this.special = 0;
}
function Thief(name) {
  this.name = name;
  this.charClass = "Thief";
  this.health = 80;
  this.damage = 7;
  this.special = 0;
}
var classInput = $("#classSelect").val();
// if(classInput === "warrior") {
//   var warrior = new Warrior();
//   player.hp = warrior.health;
//   player.damage = warrior.damage;
// } else if (classInput === "wizard") {
//   var wizard = new Wizard();
//   player.hp = wizard.health;
//   player.damage = wizard.damage;
// } else {
//   var thief = new Thief();
//   player.hp = thief.health;
//   player.damage = thief.damage;
// };
