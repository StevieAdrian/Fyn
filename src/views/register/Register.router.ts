import React from "react"
import type { IDefaultRouter } from "../../interfaces/IRoute"

const routes: IDefaultRouter[] = [
  {
    path: "/register",
    name: "Register",
    component: React.lazy(() => import("./Register")),
  },
]

export default routes
