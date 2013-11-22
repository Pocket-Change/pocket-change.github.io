/*
Simple Off-Canvas Navigation Pattern.
Framework agnostic, depends on Modernizr & Classie.
*/

// Close Drawer Object Literal
var body        = document.getElementById('wrap'),
    drawer      = document.getElementById('drawer'),
    // buttons     = Array.prototype.slice.call(document.querySelectorAll('.toggle')),
    touchEvent  = 'click',
    content     = document.getElementById('main-content');

// Add/Remove class helpers.
var hasClass = function (elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function (elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function (elem, className) {
  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};


var Drawer = {
  closeDrawer: function(){
    removeClass(drawer, 'active-left');
    removeClass(drawer, 'active-right');
    removeClass(drawer, 'active-top');
    removeClass(drawer, 'active-bottom');
    removeClass(body, 'drawer-open');
  },

  openDrawer: function(direction){
    addClass(drawer, direction);
    addClass(body, 'drawer-open');
  },

  bodyClick: function(e){
    Drawer.closeDrawer();
    content.removeEventListener(touchEvent, bodyClick );
  }
};
