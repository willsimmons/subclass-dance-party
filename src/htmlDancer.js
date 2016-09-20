var htmlDancer = function (top, left, timeBetweenSteps) {
  var htmlDancer = Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class ="dancer htmlDancer"></span>');
  this.setPosition(top, left);
};

htmlDancer.prototype = Object.create(Dancer.prototype);
htmlDancer.prototype.constructor = htmlDancer;

htmlDancer.prototype.step = function() {
  //referring to the old step while overwriting with a new step
  Dancer.prototype.step.call(this);
  //console.log(this.$node);
  //animation by way of resizing!
  this.$node.toggle(100);
};


//var nextImage = http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU