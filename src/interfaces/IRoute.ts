import type React from "react"

export declare interface IDefaultRouter {
  path: string
  name: string
  component?: React.LazyExoticComponent<any>
  exact?: boolean
  private?: boolean
}

export interface IAuthRoute extends IDefaultRouter {
  requiresAuth: boolean
  redirectTo?: string
}
