import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { login } from "../../services/actions/action-login";
import { useDispatch, useSelector } from "react-redux";
import styleLogin from "./login.module.css";


function Login() {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isAuthorized, loginError } = useSelector(state => state.pages);
  const [inputsValue, setInputsValue] = useState({ email: "", password: "" });
  const [isStatusPassword, setStatusPassword] = useState(true);

  function showPassword() {
    setStatusPassword(!isStatusPassword);
  }

  function handleChangeInput(evt) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt) {
    evt.preventDefault();
    dispatch(login(inputsValue));
    navigation("/");
  }

  if (isAuthorized) {
    return <Navigate to="/" />
  }

  return (
    <section className={styleLogin.container}>

      <h2 className={`text text_type_main-medium + ${styleLogin.title}`}>Вход</h2>
      <form className={styleLogin.inputs} onSubmit={submitForm}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={inputsValue.email || ""}
          onChange={handleChangeInput}
          error={loginError}
          required
        />

        <PasswordInput
          type={isStatusPassword ? "password" : "text"}
          name="password"
          placeholder="Пароль"
          value={inputsValue.password || ""}
          onChange={handleChangeInput}
          icon={isStatusPassword ? "ShowIcon" : "HideIcon"}
          onIconClick={showPassword}
          required
        />

        <div className={styleLogin.button}>
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </div>

      </form>


      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы — новый пользователь?
        <Link className={styleLogin.link} to="/register"> Зарегистрироваться</Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Link className={styleLogin.link} to={isAuthorized ? "/" : "/forgot-password"}> Восстановить пароль</Link>
      </p>
    </section>
  );
}

export default Login;