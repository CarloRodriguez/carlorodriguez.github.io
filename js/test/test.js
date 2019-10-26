define(function() {
    return function test() {
        describe('test', function() {
            it('should pass', function() {
                chai.expect(true).to.equal(true);
            });

            it('should pass too', function() {
                chai.expect(false).not.to.equal(true);
            });
        });
    };
});
