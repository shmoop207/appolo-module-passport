
export interface IStrategy {
    name?: string;

    authenticate(...params: any[]): any;
}

export interface IStrategyCtr {
    new(...args: any[]): IStrategy
}

export interface IStrategyMetadata {
    strategy: IStrategyCtr
}
