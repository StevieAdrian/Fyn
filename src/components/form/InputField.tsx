"use client"

import type React from "react"
import type { IInputFieldProps } from "../../interfaces/IForm"

export const InputField: React.FC<IInputFieldProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="required"> *</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-field ${error ? "error" : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="error-message" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
