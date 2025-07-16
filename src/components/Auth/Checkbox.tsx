"use client"

import "../Auth/Checkbox.scss"

interface CheckboxProps<T> {
  label: string
  name: keyof T
  checked: boolean
  onChange: (name: keyof T, value: T[keyof T]) => void
}

export function Checkbox<T>({ label, name, checked, onChange }: CheckboxProps<T>) {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(name, e.target.checked)}
      />
      <span>{label}</span>
    </label>
  )
}
