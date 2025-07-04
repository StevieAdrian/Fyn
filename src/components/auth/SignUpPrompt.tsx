"use client"

import type React from "react"

interface ISignUpPromptProps {
  onSignUp: () => void
  promptText?: string
  linkText?: string
}

export const SignUpPrompt: React.FC<ISignUpPromptProps> = ({
  onSignUp,
  promptText = "Don't have an account? ",
  linkText = "Sign up",
}) => {
  return (
    <div className="signup-link">
      <span>{promptText}</span>
      <button type="button" className="signup-button" onClick={onSignUp}>
        {linkText}
      </button>
    </div>
  )
}
