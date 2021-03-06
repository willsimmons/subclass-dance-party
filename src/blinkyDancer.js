var BlinkyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
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