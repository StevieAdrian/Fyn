"use client"

import { useState } from "react"
import "./Input.scss"

interface InputProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (name: string, value: string) => void
  error?: string
  placeholder?: string
  showPasswordToggle?: boolean
}

export const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  showPasswordToggle = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type

  return (
    <div className="input-group">
      <label htmlFor={name} className="input-group__label">
        {label}
      </label>
      <div className="input-group__wrapper">
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          placeholder={placeholder}
          className={`input-group__field ${error ? "input-group__field--error" : ""}`}
        />
        {showPasswordToggle && (
          <button type="button" className="input-group__toggle" onClick={() => setShowPassword(!showPassword)}>
            
          </button>
        )}
      </div>
      {error && <span className="input-group__error">{error}</span>}
    </div>
  )
}
