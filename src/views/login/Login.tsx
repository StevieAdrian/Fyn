"use client"

import type React from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import "./Login.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", { email, password, rememberMe })
      setIsLoading(false)
    }, 2000)
  }

  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked")
  }

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Side - Hero Section */}
        <div className="hero-section">
          <div className="hero-background" />
          <div className="hero-overlay" />
          <div className="hero-gradient" />

          <div className="hero-content">
            <div>
              <h1 className="hero-title">All you want. Just one decision.</h1>
            </div>

            <div className="hero-bottom">
              <h2 className="hero-subtitle">
                It's not about the look —<br />
                it's the decision you make to be seen.
              </h2>
              <p className="hero-description">
                FYN is here to help you stand by your choices confidently and without compromise.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="form-section">
          <div className="form-container">
            {/* Logo */}
            <div className="logo-section">
              <div className="logo">
                <span className="logo-dot">●</span>
                <span className="logo-text">fyn</span>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="welcome-section">
              <h1 className="welcome-title">Welcome Back</h1>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email or username"
                    className="input"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="input-group">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <div className="input-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="input password-input"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle"
                    disabled={isLoading}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="checkbox"
                    disabled={isLoading}
                  />
                  <span className="checkbox-label">Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot Password
                </a>
              </div>

              {/* Sign In Button */}
              <button type="submit" className={`sign-in-button ${isLoading ? "loading" : ""}`} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Google Sign In */}
              <button type="button" onClick={handleGoogleSignIn} className="google-button" disabled={isLoading}>
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <div className="sign-up-section">
                <span className="sign-up-text">Don't have an account? </span>
                <a href="#" className="sign-up-link">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
