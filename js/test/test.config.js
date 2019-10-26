define(function(require) {
    mocha.setup('bdd');

    var test = require('test/test');
    test();

    var GreetingsTest = require('test/Greetings.test');
    GreetingsTest();

    mocha.checkLeaks();
    mocha.run();
});
