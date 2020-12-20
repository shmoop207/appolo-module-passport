"use strict";
import {PassportModule} from "./module/passportModule";
import {strategy, serializer} from "./module/src/decorators"
import {PassportSerializer} from "./module/src/passportSerializer"
import {PassportStrategy} from "./module/src/passportStrategy"
import {authenticate} from "./module/src/authenticate"


export {PassportModule, strategy, serializer, PassportStrategy, PassportSerializer,authenticate}

import {AuthInfo, User} from "./module/src/interfaces/IOptions";

declare module "@appolo/route" {

    export interface IRequest {
        authInfo?: AuthInfo;
        user?: User;

        // These declarations are merged into express's Request type
        login(user: User, done: (err: any) => void): void;

        login(user: User, options: any, done: (err: any) => void): void;

        logIn(user: User, done: (err: any) => void): void;

        logIn(user: User, options: any, done: (err: any) => void): void;

        logout(): void;

        logOut(): void;

        isAuthenticated(): boolean;

        isUnauthenticated(): boolean;
    }

}
