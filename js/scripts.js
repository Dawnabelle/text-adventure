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

//front end
$(document).ready(function(){
  var roomOneNarr =['You enter a small cavern.','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
  $("#goToRoomOne").click(function(event){
    event.preventDefault();
    $(".titleCard").slideUp();
    $(".adventureTime").slideDown();

  })

  $(".nextText").click(function(event){
    event.preventDefault();
  })
});
