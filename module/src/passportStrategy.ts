import {Reflector} from "@appolo/utils"
import passport = require("passport")
import {init} from "@appolo/inject"
import {StrategySymbol} from "./decorators";
import {IStrategy, IStrategyCtr, IStrategyMetadata} from "./interfaces/IStrategy";

export abstract class PassportStrategy {

    abstract options: { [index: string]: any }

    abstract validate(...args: any[]): any;

    private _strategy: IStrategy;


    @init()
    protected initialize() {

        let {strategy: strategyCtr} = Reflector.getFnMetadata<IStrategyMetadata>(StrategySymbol, this.constructor)

        if (!strategyCtr) {
            throw new Error("failed to find passport strategy type did you forget to use @strategy")
        }

        let strategy = this._strategy = new strategyCtr(this.options, this.createCallback())

        passport.use(strategy);
    }

    public get strategy(): IStrategy {
        return this._strategy;
    }

    private createCallback() {

        return async (...params: any[]) => {
            const done = params[params.length - 1];
            try {
                const validateResult = await this.validate(...params);
                if (Array.isArray(validateResult)) {
                    done(null, ...validateResult);
                } else {
                    done(null, validateResult);
                }
            } catch (err) {
                done(err, null);
            }
        }
    }
}
