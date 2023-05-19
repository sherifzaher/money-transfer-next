import {NextPage} from "next";
import {useForm, SubmitHandler, FieldValues} from "react-hook-form";

import {InputField} from "../../inputs/InputField";
import { Button } from '../../buttons/Button';
import { LoginFormFields } from "../../../types/form-fields";
import formStyles from '../../../styles/forms.module.scss';
import buttonStyles from '../../../styles/button.module.scss';

export const LoginForm: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FieldValues>({
    defaultValues: {} as LoginFormFields,
  });

  console.log(errors);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  }

  return (
    <form className={formStyles.registerFormLogin} onSubmit={handleSubmit(onSubmit)}>
      <div className={formStyles.formNameContainer}>
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
      <Button className={buttonStyles.defaultButton}>Login</Button>
    </form>
  )
}

