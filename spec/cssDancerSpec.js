describe('cssDancer', function() {

  var cssDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    cssDancer = new CssDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(cssDancer.$node).to.be.an.instanceof(jQuery);
  });
 
  // write about the mouse over 
  xit('should respond once it is clicked', function() {
    sinon.spy(cssDancer, 'clicked');
    cssDancer.clicked();
    expect(cssDancer.clicked.called).to.be.true;
  });

  it('should be reset to the cssDancer constructor', function() {
    expect(cssDancer.constructor).to.equal(CssDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(cssDancer, 'step');
      expect(cssDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(cssDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(cssDancer.step.callCount).to.be.equal(2);
    });
  });
});