// BACK END
function roomDialogue(){
  this.words = [];
};
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
