define(['app/Greetings'], function(greetings) {
    return function GreetingsTest() {
        describe('GreetingsTest', function() {
            it('should pass', function() {
                chai.expect(greetings).to.exist;
            });
        });
    };
});
