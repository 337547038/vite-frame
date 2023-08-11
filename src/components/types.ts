export type Type =
  | 'input'
  | 'cascader'
  | 'checkbox'
  | 'datePicker'
  | 'inputNumber'
  | 'select'
  | 'switch'
  | 'timePicker'
  | 'timeSelect'
  | 'upload'
  | 'slider'
  | 'component'

export interface FormData {
  name: string
  type: Type
  formItem: any
  control: any
  config?: any
  list?: any
  component?: any
  flexData?: any
  title?: any
}
