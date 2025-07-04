"use client"

import type React from "react"
import { CheckboxField } from "../form"

interface IFormOptionsProps {
  rememberMe: boolean
  onRememberMeChange: (checked: boolean) => void
  onForgotPassword: () => void
  isLoading?: boolean
  rememberMeLabel?: string
  forgotPasswordText?: string
}

export const FormOptions: React.FC<IFormOptionsProps> = ({
  rememberMe,
  onRememberMeChange,
  onForgotPassword,
  isLoading = false,
  rememberMeLabel = "Remember me",
  forgotPasswordText = "Forgot Password?",
}) => {
  return (
    <div className="form-options">
      <CheckboxField
        id="rememberMe"
        name="rememberMe"
        checked={rememberMe}
        onChange={onRememberMeChange}
        label={rememberMeLabel}
        disabled={isLoading}
      />
      <button type="button" className="forgot-password-link" onClick={onForgotPassword} disabled={isLoading}>
        {forgotPasswordText}
      </button>
    </div>
  )
}
