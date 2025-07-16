import React from "react"
import type { IDefaultRouter } from "../../interfaces/IRoute"

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes: IDefaultRouter[] = [
  {
    path: "/login",
    name: "Login",
    component: React.lazy(() => import("./Login")),
  },
  {
    path: "/register",
    name: "Register",
    component: React.lazy(() => import("../register/Register")),
  },
]

export default routes
