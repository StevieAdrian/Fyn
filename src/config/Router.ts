import type { IDefaultRouter } from "../interfaces/IRoute";

import routerLogin from "../views/login/Login.router";

export const routerContainer: IDefaultRouter[]= [
    ...routerLogin
];