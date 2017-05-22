describe('todo factory', function() {
  var Todo;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('meanSkeleton'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_Todo_) {
    Todo = _Todo_;
  }));

  // A simple test to verify the Users factory exists
  it('should exist', function() {
    expect(Todo).toBeDefined();
  });
});