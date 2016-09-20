var jsDancer = function (top, left, timeBetweenSteps) {
  var jsDancer = Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class ="dancer jsDancer"></span>');
  this.setPosition(top, left);
};

jsDancer.prototype = Object.create(Dancer.prototype);
jsDancer.prototype.constructor = jsDancer;

jsDancer.prototype.step = function() {
  //referring to the old step while overwriting with a new step
  Dancer.prototype.step.call(this);
  //console.log(this.$node);
  //animation by way of resizing!
  this.$node.toggle(400);
};

//var nextImage = http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU