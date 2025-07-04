import type { IDefaultRouter } from "../interfaces/IRoute"
import authRoutes from "../views/login/Login.router"

export const routerContainer: IDefaultRouter[] = [...authRoutes]
