"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportSerializer = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const utils_1 = require("@appolo/utils");
const passport = require("passport");
class PassportSerializer {
    initialize() {
        passport.serializeUser(async (user, done) => {
            let [e, dto] = await utils_1.Promises.to(this.serializeUser(user));
            done(e, dto);
        });
        passport.deserializeUser(async (payload, done) => {
            let [e, dto] = await utils_1.Promises.to(this.deserializeUser(payload));
            done(e, dto);
        });
    }
}
tslib_1.__decorate([
    inject_1.init()
], PassportSerializer.prototype, "initialize", null);
exports.PassportSerializer = PassportSerializer;
//# sourceMappingURL=passportSerializer.js.map