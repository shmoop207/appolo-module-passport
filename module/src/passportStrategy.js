"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportStrategy = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@appolo/utils");
const passport = require("passport");
const inject_1 = require("@appolo/inject");
const decorators_1 = require("./decorators");
class PassportStrategy {
    initialize() {
        let { strategy: strategyCtr } = utils_1.Reflector.getFnMetadata(decorators_1.StrategySymbol, this.constructor);
        if (!strategyCtr) {
            throw new Error("failed to find passport strategy type did you forget to use @strategy");
        }
        let strategy = this._strategy = new strategyCtr(this.options, this.createCallback());
        passport.use(strategy);
    }
    get strategy() {
        return this._strategy;
    }
    createCallback() {
        return async (...params) => {
            const done = params[params.length - 1];
            try {
                const validateResult = await this.validate(...params);
                if (Array.isArray(validateResult)) {
                    done(null, ...validateResult);
                }
                else {
                    done(null, validateResult);
                }
            }
            catch (err) {
                done(err, null);
            }
        };
    }
}
tslib_1.__decorate([
    inject_1.init()
], PassportStrategy.prototype, "initialize", null);
exports.PassportStrategy = PassportStrategy;
//# sourceMappingURL=passportStrategy.js.map