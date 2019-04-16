var breakDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node.removeClass('dancer');
  this.$node.addClass('breakdancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

breakDancer.prototype = Object.create(makeDancer.prototype);

breakDancer.prototype.constructor = breakDancer;

breakDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
};