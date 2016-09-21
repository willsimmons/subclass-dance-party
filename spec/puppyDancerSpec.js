describe('puppyDancer', function() {

  var puppyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    puppyDancer = new PuppyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(puppyDancer.$node).to.be.an.instanceof(jQuery);
  });

  //animation test
  xit('should have a animate function that makes it bounce from top left to bottom right', function() {
    var oldTop = puppyDancer.$node.top;
    var oldRight = puppyDancer.$node.right; 
    sinon.spy(puppyDancer.$node, 'animate');
    puppyDancer.step();
    expect(puppyDancer.$node.top).to.be.below(oldTop);
    expect(puppyDancer.$node.right).to.be.below(oldRight);
  });
  
  //build something for when it clicks, decide on something
  xit('should respond once it is clicked', function() {
    sinon.spy(puppyDancer, 'clicked');
    puppyDancer.clicked();
    expect(puppyDancer.clicked.called).to.be.true;
  });

  it('should be reset to the puppyDancer constructor', function() {
    expect(puppyDancer.constructor).to.equal(PuppyDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(puppyDancer, 'step');
      expect(puppyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(puppyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(puppyDancer.step.callCount).to.be.equal(2);
    });
  });
});
