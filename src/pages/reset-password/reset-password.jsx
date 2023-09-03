import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/action-reset-password";
import styleReset from "./reset-password.module.css";


function ResetPassword() {

  const dispatch = useDispatch();

  const { isAuthorized, resetPasswordError, resetPasswordSuccess } = useSelector(state => state.pages);
  const [inputsValue, setInputsValue] = useState({ password: "", code: "" });

  function handleChangeInput(evt) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(resetPassword(inputsValue));
  }

  if (isAuthorized) {
    return <Navigate to="/" />
  } else if (resetPasswordSuccess) {
    return <Navigate to="/" />
  }


  return (
    <section className={styleReset.container}>
      <h2 className={`text text_type_main-medium + ${styleReset.title}`}>Восстановление пароля</h2>

      <form className={styleReset.inputs} onSubmit={submitForm}>
        <PasswordInput
          type="password"
          name="password"
          placeholder="Введите новый пароль"
          value={inputsValue.password || ''}
          onChange={handleChangeInput}
          error={resetPasswordError}
          required
        />
        <Input
          type="text"
          name="code"
          placeholder="Введите код из письма"
          value={inputsValue.code || ""}
          onChange={handleChangeInput}
          error={resetPasswordError}
          required
        />

        <div className={styleReset.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link className={styleReset.link} to="/login"> Войти</Link>
      </p>
    </section>
  )
}

export default ResetPassword;