import type React from "react"
import "./Card.scss"

interface CardProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export const Card = ({ children, title, subtitle }: CardProps) => {
  return (
    <div className="auth-card">
      <div className="auth-card__header">
        <h2 className="auth-card__title">{title}</h2>
        {subtitle && <p className="auth-card__subtitle">{subtitle}</p>}
      </div>
      <div className="auth-card__content">{children}</div>
    </div>
  )
}
