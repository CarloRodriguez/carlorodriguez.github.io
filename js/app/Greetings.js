define(function() {
    return function Greetings(props) {
        var valueState = React.useState(localStorage.getItem("value"));
        var value = valueState[0];
        var setValue = valueState[1];

        var outputState = React.useState("");
        var output = outputState[0];
        var setOutput = outputState[1];

        var onSet = function() {
            localStorage.setItem("msg", "Leeroy Jenkins!");
        };

        var onGet = function() {
            alert(localStorage.getItem("msg"));
        };

        var onRun = function() {
            setOutput(eval(value));
            localStorage.setItem("value", value);
        };

        var onChange = function(event) {
            setValue(event.target.value);
        };

        return React.createElement(
            React.Fragment, null,
            React.createElement("button", {
                onClick: onSet
            }, "Set"),
            React.createElement("button", {
                onClick: onGet
            }, "Get"),
            React.createElement("textarea", {
                value: value,
                onChange: onChange,
                rows: 10,
                cols: 50
            }, ""),
            React.createElement("button", {
                onClick: onRun
            }, "Run"),
            React.createElement("p", null, output),
        );
    };
});
