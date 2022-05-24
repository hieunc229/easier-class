"use strict";
// dom-class-utils
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClassStr = void 0;
var ClassUtils = /** @class */ (function () {
    function ClassUtils() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.classList = (args && args.filter(function (cls) { return cls !== undefined && cls !== false; })) || [];
    }
    ClassUtils.prototype.addWithPrefix = function (prefix) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        args.forEach(function (el) {
            el !== undefined && el !== false && _this.classList.push("".concat(prefix).concat(el));
        });
        return this;
    };
    ClassUtils.prototype.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.classList = this.classList.concat(args.filter(function (cls) { return cls !== undefined && cls !== false; }));
        return this;
    };
    ClassUtils.prototype.toString = function () {
        return this.classList.join(" ");
    };
    ClassUtils.prototype.addIf = function (cond, clsTrue, clsFalse) {
        cond && clsTrue && this.classList.push(clsTrue);
        !cond && clsFalse && this.classList.push(clsFalse);
        return this;
    };
    return ClassUtils;
}());
function createClass() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return new (ClassUtils.bind.apply(ClassUtils, __spreadArray([void 0], args, false)))();
}
exports.default = createClass;
function createClassStr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return createClass.apply(void 0, args).toString();
}
exports.createClassStr = createClassStr;
