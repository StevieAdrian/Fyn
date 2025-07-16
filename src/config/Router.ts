import type { IDefaultRouter } from "../interfaces/IRoute"

import routerLogin from "../views/login/Login.router"
import routerRegister from "../views/register/Register.router"

export const routerContainer: IDefaultRouter[] = [...routerLogin, ...routerRegister]
