define(function(require) {
    var Greetings = require('Greetings');

    ReactDOM.render(
        React.createElement(Greetings, null),
        document.getElementById('root')
    );
});
