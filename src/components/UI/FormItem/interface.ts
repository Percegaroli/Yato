export interface InputItemProps<T> {
  label: string,
  value: T,
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputClassName?: string,
  labelClassName?: string,
  type?: 'text' | 'password'
}
