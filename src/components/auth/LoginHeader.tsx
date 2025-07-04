"use client"

import type React from "react"

interface ILoginHeaderProps {
  logoText?: string
  title?: string
  subtitle?: string
}

export const LoginHeader: React.FC<ILoginHeaderProps> = ({ logoText = "● Fyn", title = "Welcome Back", subtitle }) => {
  return (
    <>
      <div className="logo-container">
        <h1 className="logo">{logoText}</h1>
      </div>
      <div className="form-header">
        <h2 className="form-title">{title}</h2>
        {subtitle && <p className="form-subtitle">{subtitle}</p>}
      </div>
    </>
  )
}
