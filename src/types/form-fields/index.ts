export type RegisterFormFields = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export type ReactHookFormOption = {
  value: number;
  message: string;
}

export type ReactHookForm = {
  maxLength?: ReactHookFormOption;
  minLength?: ReactHookFormOption;
}