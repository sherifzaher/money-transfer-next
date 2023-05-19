import {NextPage} from "next";
import { useForm, SubmitHandler } from "react-hook-form";

import {InputField} from "../../inputs/InputField";
import { Button } from '../../buttons/Button';
import styles from './index.module.scss';
import {RegisterFormFields} from "../../../types/form-fields";

export const RegisterForm: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<RegisterFormFields>();

  console.log(errors);

  const onSubmit: SubmitHandler<RegisterFormFields> = (data) => {
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameContainer}>
        <InputField
          id={"firstName"}
          label={"First name"}
          required
          register={register}
          errors={errors}
          option={{
            maxLength:{
              value: 32,
              message: '32 Characters Max'
            },
            minLength: {
              value: 2,
              message: '2 Characters Min',
            }
          }}
        />
        <InputField
          id={"lastName"}
          label={"Last name"}
          required
          register={register}
          errors={errors}
          option={{
            maxLength:{
              value: 32,
              message: '32 Characters Max'
            },
            minLength: {
              value: 2,
              message: '2 Characters Min',
            }
          }}
        />
      </div>
      <InputField
        id={"username"}
        label={"Username"}
        required
        register={register}
        errors={errors}
        option={{
          maxLength:{
            value: 32,
            message: '32 Characters Max'
          },
          minLength: {
            value: 3,
            message: '3 Characters Min',
          }
        }}
      />
      <InputField
        id={"password"}
        label={"Password"}
        type={"password"}
        required
        register={register}
        errors={errors}
        option={{
          maxLength: {
            value: 32,
            message: '32 Characters Min'
          },
          minLength: {
            value: 8,
            message: '8 Characters Min'
          }
        }}
      />
      <Button className={styles.button}>Create Account</Button>
    </form>
  )
}

