(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["primary"] = 0] = "primary";
        ButtonType[ButtonType["secondary"] = 1] = "secondary";
        ButtonType[ButtonType["success"] = 2] = "success";
        ButtonType[ButtonType["danger"] = 3] = "danger";
        ButtonType[ButtonType["warning"] = 4] = "warning";
        ButtonType[ButtonType["info"] = 5] = "info";
        ButtonType[ButtonType["dark"] = 6] = "dark";
    })(ButtonType || (ButtonType = {}));
});
//# sourceMappingURL=Button.type.js.map