import {Reflector, Classes} from '@appolo/utils';
import {IClass} from '@appolo/engine';
import {IStrategy, IStrategyCtr, IStrategyMetadata} from "./interfaces/IStrategy";

export const StrategySymbol = "__StrategySymbol__"
export const SerializerSymbol = "__SerializerSymbol__"


export function strategy(strategy:  IStrategyCtr) {
    return Reflector.decorateMetadata(StrategySymbol, {strategy} as IStrategyMetadata)
}
export function serializer() {
    return Reflector.decorateMetadata(SerializerSymbol, {})
}
