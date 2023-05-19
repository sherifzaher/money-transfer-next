import {NextPage} from "next";
import {RegisterForm} from "../../components/forms/register/RegisterForm";

const RegisterPage: NextPage = () => {
    return (
        <div className={"page"}>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage