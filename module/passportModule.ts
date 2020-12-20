import {Module, module, IModuleParams} from "@appolo/engine";
import {IOptions} from "./src/interfaces/IOptions";
import * as passport from "passport";
import {App} from "@appolo/core";

@module()
export class PassportModule extends Module<IOptions> {

    protected readonly Defaults: Partial<IOptions> = {
      session:false
    };


    public static for(options: IOptions): IModuleParams {
        return {type: PassportModule, options}
    }

    public beforeModuleInitialize() {

        let app = this.app.tree.getRoot<App>();

        app.event.afterGlobalMiddlewares.on(() => {
            app.route.use(passport.initialize());
            if (this.moduleOptions.session) {
                app.route.use(passport.session());
            }
        });

    }
}
