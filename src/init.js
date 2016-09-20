$(document).ready(function() {
  window.dancers = [];
  var danceNode = [];
  var lineUpState = false;
  var oldHorizontalPositions = [];
  var oldVerticalPositions = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log('dancerMakerFunctionName', dancerMakerFunctionName)
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('dancerMakerFunction', dancerMakerFunction);
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000);
    $('body').append(dancer.$node);
    //setup for movement and reset
    danceNode.push(dancer);
    oldVerticalPositions.push(dancer.top);
    oldHorizontalPositions.push(dancer.left);
  });
  
  var vertical = function() {
    for (var i = 0; i < danceNode.length; i++) {
      danceNode[i].setPosition(oldVerticalPositions[i], 400.00);
    } 
  };
  
  var horizontal = function() {
    for (var i = 0; i < danceNode.length; i++) {
      danceNode[i].setPosition(400.00, oldHorizontalPositions[i]);
    }
  };

  var reset = function() {
    for (var i = 0; i < danceNode.length; i++) {
      danceNode[i].setPosition(oldVerticalPositions[i], oldHorizontalPositions[i]);
    }
  };

  $( '.vertical-line-up' ).on('click', function () {
    vertical();
  });

  $( '.horizontal-line-up' ).on('click', function () {
    horizontal();
  });

  $( '.reset' ).on('click', function () {
    reset();
  });

  

});

