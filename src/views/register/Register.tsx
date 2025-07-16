"use client"

import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { Card } from "../../components/Auth/Card"
import { Input } from "../../components/Auth/Input"
import { Button } from "../../components/Auth/Button"
import logo from "../../assets/logo.png"
import "./Register.scss"

interface RegisterForm {
  email: string
  password: string
}

const Register = () => {
  const { values, errors, loading, handleChange, handleSubmit } = useForm<RegisterForm>(
    {
      email: "",
      password: "",
    },
    (values) => {
      const errors: Partial<Record<keyof RegisterForm, string>> = {}

      if (!values.email) {
        errors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid"
      }

      if (!values.password) {
        errors.password = "Password is required"
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
      }

      return errors
    }
  )

  const onSubmit = async (data: RegisterForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Register:", data)
    alert("Registration successful!")
  }

  return (
    <div className="register-page">
      <div className="register-page__container">
        <div className="register-page__logo">
          <img src={logo || "/placeholder.svg"} alt="Fyn" />
        </div>

        <Card title="Register" subtitle="Join us for a personalized shopping experience.">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={(name, value) => handleChange(name as keyof RegisterForm, value)}
              error={errors.email}
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={(name, value) => handleChange(name as keyof RegisterForm, value)}
              error={errors.password}
              placeholder="Enter your password"
              showPasswordToggle
            />

            <Button type="submit" loading={loading}>
              Sign Up
            </Button>

            <Button type="button" variant="google">
               <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              style={{ width: '20px', height: '20px', marginRight: '8px' }}
            /> Sign in with Google
            </Button>

            <p className="register-page__login">
              Already have an account ? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </Card>

        <div className="register-page__footer">
          © 2024-2025, PT FYN | <Link to="/help">Support</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
