// INIT

var ref = new Firebase('https://pocket.firebaseio.com/');
var count = document.getElementById('pocket-value');
var p = {};
var undid = false;

var current  = ref.child('current'),
    last     = ref.child('last'),
    start    = ref.child('start');

var Pocket = Pocket || {};


Pocket = {
  init: function(){
    ref.on('value', function(snapshot) {
      p = snapshot.val();
      count.innerHTML = p.current.toFixed(2);

      Pocket.colorize();
    });
  },

  set: function(val) {
    num = parseFloat(val);
    start.set(num);
    current.set(num);
    last.set('');
    undid = false;
  },

  subtract: function(val) {
    num = parseFloat(val);
    var latest = p.current - num;
    current.set(latest);
    last.set(num);
    undid = false;
  },

  // UNDO/REDO
  undo: function() {
    val = p.current+p.last;
    if (undid === false) {
      current.set(val);
    }
    undid = true;
  },

  redo: function() {
    if (undid === true) {
      val = p.current-p.last;
      current.set(val);
      undid = false;
    } else {
      console.log('Nothing to Undo.');
    }
  },

  colorize: function() {
    var scale = chroma.scale(['#D73027', '#4575B4']).domain([0, p.start]);
    var moment = scale.mode('lab')(p.current);
    $('.frame').css('background-color', moment);
  }
};

$( document ).ready(function() {
  Pocket.init();
});
