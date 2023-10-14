import { useState, FC, FormEvent, ChangeEvent } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { forgotPassword } from "../../services/actions/action-forgot-password";
import { AppThunkAction } from "../../services/types/services-types";
import styleForgot from "./forgot-password.module.css";

interface IForgotPassword {
  email: string;
}


const ForgotPassword: FC = () => {

  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isAuthorized, forgotPasswordError, forgotPasswordSuccess } = useAppSelector((state) => state.pages);
  const [inputsValue, setInputsValue] = useState<IForgotPassword>({ email: "" });
  const from = location.state?.from || "/";

  function handleChangeInput(evt: ChangeEvent<HTMLInputElement>) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt: FormEvent) {
    evt.preventDefault();
    dispatch(forgotPassword(inputsValue) as AppThunkAction);
  }

  if (isAuthorized) {
    return <Navigate to={from} />
  } else if (forgotPasswordSuccess) {
    return <Navigate to="/reset-password" />
  }


  return (
    <section className={styleForgot.container}>
      <h2 className={`text text_type_main-medium + ${styleForgot.title}`}>Восстановление пароля</h2>

      <form className={styleForgot.inputs} onSubmit={submitForm}>
        <Input
          type="email"
          name="email"
          placeholder="Укажите e-mail"
          value={inputsValue.email || ""}
          onChange={handleChangeInput}
          error={forgotPasswordError}
          required
        />

        <div className={styleForgot.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Восстановить
          </Button>
        </div>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link className={styleForgot.link} to="/login"> Войти</Link>
      </p>
    </section>
  )
}

export default ForgotPassword;
