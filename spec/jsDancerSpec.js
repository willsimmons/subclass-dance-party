describe('jsDancer', function() {

  var jsDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jsDancer = new JsDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jsDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have a step function that makes its node blink', function() {
    sinon.spy(jsDancer.$node, 'toggle');
    jsDancer.step();
    expect(jsDancer.$node.toggle.called).to.be.true;
  });

  xit('should change colors on mouseover', function() {
    sinon.spy(jsDancer.$node, 'toggle');
    jsDancer.step();
    expect(jsDancer.$node.toggle.called).to.be.true;
  });

  xit('should respond once it is clicked', function() {
    sinon.spy(jsDancer, 'clicked');
    jsDancer.clicked();
    expect(jsDancer.clicked.called).to.be.true;
  });

  it('should be reset to the jsDancer constructor', function() {
    expect(jsDancer.constructor).to.equal(JsDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(jsDancer, 'step');
      expect(jsDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(jsDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(jsDancer.step.callCount).to.be.equal(2);
    });
    xit('should have a unique dance move', function() {});
  });
});
