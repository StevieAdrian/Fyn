import React from "react"
import type { IDefaultRouter } from "../../interfaces/IRoute"

const routes: IDefaultRouter[] = [
  {
    path: "/login",
    name: "Login",
    component: React.lazy(() => import("./Login")),
  },
]

export default routes
