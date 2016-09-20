var BlinkyDancer = function (top, left, timeBetweenSteps) {
  var blinkyDancer = Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class ="dancer blinkyDancer"></span>');
  this.clicked();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  //referring to the old step while overwriting with a new step
  Dancer.prototype.step.call(this);
  //console.log(this.$node);
  this.$node.toggle(400);
};

BlinkyDancer.prototype.clicked = function() {
  $(this.$node).on('click', function () {
    console.log('clicked blinky');
  });
};