"use client"

import type React from "react"
import { useState } from "react"

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [loading, setLoading] = useState(false)

  const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
    setValues((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (
    onSubmit: (values: T) => Promise<void> | void,
    validate?: (values: T) => Partial<Record<keyof T, string>>,
  ) => {
    return async (e: React.FormEvent) => {
      e.preventDefault()

      if (validate) {
        const validationErrors = validate(values)
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }
      }

      setLoading(true)
      setErrors({})

      try {
        await onSubmit(values)
      } catch (error) {
        console.error("Form submission error:", error)
      } finally {
        setLoading(false)
      }
    }
  }

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  }
}
