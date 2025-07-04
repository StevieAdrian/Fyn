"use client"

import type React from "react"
import { InputField, PasswordField } from "../form"
import SimpleLoading from "../simple_loading"
import { LoginHeader, FormOptions, SocialLogin, SignUpPrompt } from "./"
import type { ILoginFormData, ILoginFormErrors } from "../../interfaces/IAuth"
import "./AuthComponents.css"

interface ILoginFormSectionProps {
  formData: ILoginFormData
  errors: ILoginFormErrors
  isLoading: boolean
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onRememberMeChange: (checked: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  onForgotPassword: () => void
  onGoogleSignIn: () => void
  onSignUp: () => void
}

export const LoginFormSection: React.FC<ILoginFormSectionProps> = ({
  formData,
  errors,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onRememberMeChange,
  onSubmit,
  onForgotPassword,
  onGoogleSignIn,
  onSignUp,
}) => {
  return (
    <div className="login-form-container">
      <LoginHeader />

      <form onSubmit={onSubmit} className="login-form">
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onEmailChange}
          placeholder="Enter your email or username"
          label="Email"
          error={errors.email}
          required
          disabled={isLoading}
        />

        <PasswordField
          id="password"
          name="password"
          value={formData.password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
          label="Password"
          error={errors.password}
          required
          disabled={isLoading}
        />

        <FormOptions
          rememberMe={formData.rememberMe}
          onRememberMeChange={onRememberMeChange}
          onForgotPassword={onForgotPassword}
          isLoading={isLoading}
        />

        {errors.general && (
          <div className="error-message general-error" role="alert">
            {errors.general}
          </div>
        )}

        {isLoading ? (
          <div className="loading-container">
            <SimpleLoading />
          </div>
        ) : (
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        )}
      </form>

      <SocialLogin onGoogleSignIn={onGoogleSignIn} isLoading={isLoading} />
      <SignUpPrompt onSignUp={onSignUp} />
    </div>
  )
}
