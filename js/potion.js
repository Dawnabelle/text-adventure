User.prototype.potion = function(){
  this.hp += 10;
}

User.prototype.mushroom = function() {
  debugger;
  var mushroomRoll = roll();
  if (mushroomRoll > 10) {
    return this.hp += 15
  } else {
    return this.hp -= 15
  }
}
