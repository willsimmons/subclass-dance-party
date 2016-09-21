var PuppyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('puppyDancer');
  this.clickedPuppy();
};

PuppyDancer.prototype = Object.create(Dancer.prototype); 

PuppyDancer.prototype.constructor = PuppyDancer;

PuppyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

PuppyDancer.prototype.clickedPuppy = function() {
  $(this.$node).on('click', function () {
    console.log('clicked puppy');
  });
  
};
//var nextImage = http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU