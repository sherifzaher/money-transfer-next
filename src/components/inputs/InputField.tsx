import {NextPage} from "next";
import {FieldValues, UseFormRegister, FieldErrors} from 'react-hook-form';
import styles from './index.module.scss'
import {ReactHookForm} from "../../types/form-fields";

type Props = {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors: FieldErrors;
  option: ReactHookForm;
  type?: "text" | "password";
}

export const InputField: NextPage<Props> = ({label, id, register, required = false, type = "text", option}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerHeader}>
        <div className={styles.inputLabel}>
          <label htmlFor={id}>{label}</label>
        </div>
        <div className={styles.inputError}></div>
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