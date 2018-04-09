//front end
$(document).ready(function(){
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
    var roomOneNarr =['You enter a small cavern.','Its damp, earthy smell overtakes your senses.', 'You look around and notice two paths: one on your left and one on your right.', 'Which path will you choose?']
    $("#goToRoomOne").click(function(){
      $(".titleCard").slideUp();
      $(".adventureTime").slideDown();
    });
    $(".nextText").click(function(){
    });
  });
});
