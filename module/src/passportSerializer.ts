import {init} from "@appolo/inject"
import {Promises} from "@appolo/utils"
import passport = require("passport");

export abstract class PassportSerializer {

    abstract serializeUser(user: any): Promise<any> | any;

    abstract deserializeUser(payload: any): Promise<any> | any;

    @init()
    protected initialize() {

        passport.serializeUser(async (user, done) => {

            let [e, dto] = await Promises.to(this.serializeUser(user));
            done(e, dto);

        });

        passport.deserializeUser(async (payload, done) => {

            let [e, dto] = await Promises.to(this.deserializeUser(payload));
            done(e, dto);
        });
    }

}


