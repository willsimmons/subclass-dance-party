var puppyDancer = function (top, left, timeBetweenSteps) {
  var puppyDancer = Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class ="dancer puppyDancer"></span>');
  this.setPosition(top, left);
  this.clickedPuppy();
};

puppyDancer.prototype = Object.create(Dancer.prototype); 

puppyDancer.prototype.constructor = puppyDancer;

puppyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

puppyDancer.prototype.clickedPuppy = function() {
  $(this.$node).on('click', function () {
    console.log('clicked puppy');
  });
  
};
//var nextImage = http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082014/js1_0.png?itok=BqOjTfHU