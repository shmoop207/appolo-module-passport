"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const passport = require("passport");
function authenticate(strategyType, options) {
    return function (req, res, next) {
        let strategyPassport = req.app.injector.get(strategyType);
        return passport.authenticate(strategyPassport.strategy, options)(req, res, next);
    };
}
exports.authenticate = authenticate;
//# sourceMappingURL=authenticate.js.map