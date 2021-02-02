"use strict";
exports.__esModule = true;
exports.AnimatedCounter = void 0;
var react_1 = require("react");
exports.AnimatedCounter = react_1["default"].forwardRef(function (_a, ref) {
    var initialValue = _a.initialValue;
    react_1.useImperativeHandle(ref, function () { return ({
        start: start
    }); });
    var _b = react_1.useState(initialValue), valueToShow = _b[0], setValueToShow = _b[1];
    var value = react_1.useRef(initialValue);
    var start = function (to) {
        requestAnimationFrame(animate.bind(undefined, to));
    };
    var animate = function (to) {
        if (value.current > to)
            value.current--;
        else
            value.current++;
        setValueToShow(value.current);
        if (value.current !== to) {
            requestAnimationFrame(animate.bind(undefined, to));
        }
    };
    return <>{valueToShow}</>;
});
