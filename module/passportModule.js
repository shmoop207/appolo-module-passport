"use strict";
var PassportModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const passport = require("passport");
let PassportModule = PassportModule_1 = class PassportModule extends engine_1.Module {
    constructor() {
        super(...arguments);
        this.Defaults = {
            session: false
        };
    }
    static for(options) {
        return { type: PassportModule_1, options };
    }
    beforeModuleInitialize() {
        let app = this.app.tree.getRoot();
        app.event.afterGlobalMiddlewares.on(() => {
            app.route.use(passport.initialize());
            if (this.moduleOptions.session) {
                app.route.use(passport.session());
            }
        });
    }
};
PassportModule = PassportModule_1 = tslib_1.__decorate([
    engine_1.module()
], PassportModule);
exports.PassportModule = PassportModule;
//# sourceMappingURL=passportModule.js.map