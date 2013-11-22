// KEYBOARD
Pocket.keyboard = function(which){
  // var zone = document.querySelectorAll('#' + which);
  // console.log(zone[0]);
  var keys   = $('#'+ which +' .key'),
      del    = $('#'+ which +' .del'),
      go     = $('#'+ which +' .go'),
      output = $('#'+ which +' .output')[0],
      array  = [];


  keys.click(function(e){
    var keypressed = e.currentTarget.getAttribute('data-value');
    array.push(keypressed);
    output.innerHTML = array.join("");
    e.preventDefault();
  });

  del.click(function(e){
    console.log('pop!');
    array.pop();
    output.innerHTML = array.join("");
    e.preventDefault();
  });

  go.click(function(e){
    console.log('go!');
    var val = array.join("");
    if (which == "resetter") {
      Pocket.set(val);
    } else if (which == "subtracter") {
      Pocket.subtract(val);
      array = [];
      output.innerHTML = "";
    }
    Drawer.closeDrawer();
  });
};

$( document ).ready(function() {
  Pocket.keyboard("resetter");
  Pocket.keyboard("subtracter");
});

