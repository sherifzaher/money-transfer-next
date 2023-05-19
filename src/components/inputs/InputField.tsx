import {NextPage} from "next";
import {UseFormRegister, FieldErrors, FieldValues} from 'react-hook-form';
import styles from './index.module.scss'
import {ReactHookForm, RegisterFormFields} from "../../types/form-fields";

type Props = {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors?: FieldErrors;
  option: ReactHookForm;
  type?: "text" | "password";
}

export const InputField: NextPage<Props> = ({label, id, register, required = false, type = "text", errors, option}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerHeader}>
        <div className={styles.inputLabel}>
          <label htmlFor={id}>{label}</label>
        </div>
        {/*// @ts-ignore*/}
        {errors && (<div className={styles.inputError}>{errors[id]?.message}</div>)}
      </div>
      <input
        id={id}
        type={type}
        className={styles.inputField}
        {...register(id,{
          required,
          ...option,
        })}
      />
    </div>
  )
}