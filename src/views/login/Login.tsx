import type React from "react"
import { useState } from "react"
import { PortraitSection, LoginFormSection } from "../../components/auth"
import type { ILoginFormData, ILoginFormErrors } from "../../interfaces/IAuth"
import "../../components/auth/Login.css"

const Login: React.FC = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [errors, setErrors] = useState<ILoginFormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (value: string) => {
    setFormData((prev) => ({ ...prev, email: value }))
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
  }

  const handlePasswordChange = (value: string) => {
    setFormData((prev) => ({ ...prev, password: value }))
    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
  }

  const handleRememberMeChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const validateForm = (): boolean => {
    const newErrors: ILoginFormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors((prev) => ({ ...prev, general: undefined }))

    if (!validateForm()) return

    setIsLoading(true)

    try {
      
      alert("Login successful!")
      setFormData({ email: "", password: "", rememberMe: false })
    } catch (error) {
      setErrors((prev) => ({ ...prev, general: "Invalid email or password. Please try again." }))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <PortraitSection />
      <div className="login-right">
        <LoginFormSection
          formData={formData}
          errors={errors}
          isLoading={isLoading}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onRememberMeChange={handleRememberMeChange}
          onSubmit={handleSubmit} onForgotPassword={function (): void {
            throw new Error("")
          } } onGoogleSignIn={function (): void {
            throw new Error("")
          } } onSignUp={function (): void {
            throw new Error("")
          } }        />
      </div>
    </div>
  )
}

export default Login
