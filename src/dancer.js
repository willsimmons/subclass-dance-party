 // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class ="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);
  this.changeColor();
};

Dancer.prototype.step = function () {
  this.changeColor();
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.changeColor = function() {
  $('.dancer').hover(
    function() { 
      var $this = $(this);
      $this.data('bgcolor', $this.css('color')).css('color', '#380606');
    },
    function() { 
      var $this = $(this);
      $this.css('color', $this.data('bgcolor'));
    }
  ); 
  // this.$node.mouseover(function() {
  //   this.css({color: '#FFEFD5'});
  //   console.log('this', this);
  // }).mouseout(function() {
  //   console.log('off');
  //   this.css({color: '#663399'});
};

