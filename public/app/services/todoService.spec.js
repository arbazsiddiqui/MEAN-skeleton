describe('todo factory', function() {
  var Todo;
  
  beforeEach(angular.mock.module('meanSkeleton'));
  beforeEach(angular.mock.module('todoService'));
  beforeEach(inject(function(_Todo_) {
    Todo = _Todo_;
  }));
  beforeEach(function(){
    spyOn(console, 'error');
  });

  it('should print error to console', function(){
    expect(console.error).toHaveBeenCalled();
  });
  
  it('should exist', function() {
    expect(Todo).toBeDefined();
  });

  describe('.all', function () {
    it('should login', function () {
      expect(Todo.all).toEqual(["arbaz", "siddiqui"])
    })
  });

  //
});