"use client"

import type React from "react"
import "./Button.scss"

interface ButtonProps {
  children: React.ReactNode
  type?: "button" | "submit"
  variant?: "primary" | "google"
  loading?: boolean
  onClick?: () => void
  className?: string
}

export const Button = ({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button type={type} disabled={loading} onClick={onClick} className={`btn btn--${variant} ${className}`}>
      {loading ? "Loading..." : children}
    </button>
  )
}
