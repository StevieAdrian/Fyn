export interface IInputFieldProps {
  id: string
  name: string
  type: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  required?: boolean
  disabled?: boolean
  className?: string
}

export interface IPasswordFieldProps extends Omit<IInputFieldProps, "type"> {
  showPassword?: boolean
  onTogglePassword?: () => void
}

export interface ICheckboxFieldProps {
  id: string
  name: string
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  disabled?: boolean
  className?: string
}
