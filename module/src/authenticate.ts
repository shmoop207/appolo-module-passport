import passport = require("passport")
import {PassportStrategy} from "./passportStrategy";
import {IRequest,IResponse,NextFn} from "@appolo/route";



export function authenticate(strategyType:typeof PassportStrategy, options?:passport.AuthenticateOptions) {

    return function(req: IRequest, res: IResponse, next: NextFn){

        let strategyPassport  = req.app.injector.get<PassportStrategy>(strategyType)

        return passport.authenticate(strategyPassport.strategy, options)(req,res,next)
    }



}
