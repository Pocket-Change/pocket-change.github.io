
var mainElement = document.getElementById('main-content'),
    topper      = document.getElementById('other'),
    bottom        = document.getElementById('self'),
    wrapper     = document.getElementById('wrap');

// Check for touch devices.
var isMobile = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

var openBottom = Hammer(bottom).on("doubletap", function(event) {
  Drawer.openDrawer('active-bottom');
});

var openBottom = Hammer(topper).on("doubletap", function(event) {
  Drawer.openDrawer('active-top');
});

var undoThing = Hammer(mainElement).on("dragup, swipeup", function(event) {
  Pocket.undo();
});

var redoThing = Hammer(mainElement).on("dragdown, swipedown", function(event) {
  Pocket.redo();
});


// var openReset = Hammer(mainElement).on("swipedown", function(event) {
//   Drawer.openDrawer('active-top');
// });

// var timehammer = Hammer(other).on("swipedown", function(event) {
//   console.log('hey top');
//   event.preventDefault();
//   event.gesture.preventDefault();
//   Drawer.openDrawer('active-top');
// });

// var openSubtracter = Hammer(mainElement).on("swipeup", function(event) {
//   Drawer.openDrawer('active-bottom');
// });

// var hammerTime = Hammer(mainElement).on("dragup", function(event) {
//   Drawer.openDrawer('active-bottom');
// });

var closeOut = Hammer(mainElement).on("pinch", function(event) {
  if (hasClass(wrapper, 'drawer-open')){
    Drawer.closeDrawer();
  }
});
