import type React from "react"
export interface ILoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

export interface ILoginFormErrors {
  email?: string
  password?: string
  general?: string
}

export interface IAuthState {
  isLoading: boolean
  isAuthenticated: boolean
  user: IUser | null
  error: string | null
}

export interface IUser {
  id: string
  email: string
  name: string
  avatar?: string
}

export interface ILoginCallbacks {
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onRememberMeChange: (checked: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  onForgotPassword: () => void
  onGoogleSignIn: () => void
  onSignUp: () => void
}
