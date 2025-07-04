"use client"

import type React from "react"

interface ISocialLoginProps {
  onGoogleSignIn: () => void
  isLoading?: boolean
  googleText?: string
}

export const SocialLogin: React.FC<ISocialLoginProps> = ({
  onGoogleSignIn,
  isLoading = false,
  googleText = "Sign in with Google",
}) => {
  return (
    <button type="button" className="google-signin-button" onClick={onGoogleSignIn} disabled={isLoading}>
      <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/120px-Google_Favicon_2025.svg.png"
  alt="Google"
  className="google-icon"
/>

      {googleText}
    </button>
  )
}
