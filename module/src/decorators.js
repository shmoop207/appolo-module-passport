"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializer = exports.strategy = exports.SerializerSymbol = exports.StrategySymbol = void 0;
const utils_1 = require("@appolo/utils");
exports.StrategySymbol = "__StrategySymbol__";
exports.SerializerSymbol = "__SerializerSymbol__";
function strategy(strategy) {
    return utils_1.Reflector.decorateMetadata(exports.StrategySymbol, { strategy });
}
exports.strategy = strategy;
function serializer() {
    return utils_1.Reflector.decorateMetadata(exports.SerializerSymbol, {});
}
exports.serializer = serializer;
//# sourceMappingURL=decorators.js.map