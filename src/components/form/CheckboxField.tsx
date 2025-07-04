"use client"

import type React from "react"
import type { ICheckboxFieldProps } from "../../interfaces/IForm"

export const CheckboxField: React.FC<ICheckboxFieldProps> = ({
  id,
  name,
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`checkbox-group ${className}`}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="checkbox-field"
      />
      <label htmlFor={id} className="checkbox-label">
        {label}
      </label>
    </div>
  )
}
