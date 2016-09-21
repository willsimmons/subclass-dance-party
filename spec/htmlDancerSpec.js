describe('htmlDancer', function() {

  var htmlDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    htmlDancer = new HtmlDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(htmlDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(htmlDancer.$node, 'toggle');
    htmlDancer.step();
    expect(htmlDancer.$node.toggle.called).to.be.true;
  });

  xit('should respond once it is clicked', function() {
    sinon.spy(htmlDancer, 'clicked');
    htmlDancer.clicked();
    expect(htmlDancer.clicked.called).to.be.true;
  });

  xit('should change colors on mouseover', function() {
    sinon.spy(htmlDancer, 'clicked');
    htmlDancer.clicked();
    expect(htmlDancer.clicked.called).to.be.true;
  });

  it('should be reset to the htmlDancer constructor', function() {
    expect(htmlDancer.constructor).to.equal(HtmlDancer);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(htmlDancer, 'step');
      expect(htmlDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(htmlDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(htmlDancer.step.callCount).to.be.equal(2);
    });
    xit('should have a unique dance move', function() {});
  });
});