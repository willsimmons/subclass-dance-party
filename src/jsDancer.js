var JsDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jsDancer');
  $(this.$node).hover(function() {
    $(this.$node).css('border', '30px solid #FFEFD5');
  });
};

JsDancer.prototype = Object.create(Dancer.prototype);
JsDancer.prototype.constructor = JsDancer;

JsDancer.prototype.step = function() {
  //referring to the old step while overwriting with a new step
  Dancer.prototype.step.call(this);
  //animation by way of resizing!
  this.$node.toggle(400);
};

//var nextImage = http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU