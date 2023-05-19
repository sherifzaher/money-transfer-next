import {NextPage} from "next";
import styles from './index.module.scss';
import {RegisterForm} from "../../components/forms/register/RegisterForm";

const RegisterPage: NextPage = () => {
    return (
        <div className={styles.page}>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage