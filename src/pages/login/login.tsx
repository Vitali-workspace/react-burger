import { useState, FC, FormEvent, ChangeEvent } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../services/actions/action-login";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { ILogin } from "../../services/types/services-types";
import styleLogin from "./login.module.css";


const Login: FC = () => {

  const dispatch = useAppDispatch();
  const navigation = useNavigate();
  const { isAuthorized, loginError } = useAppSelector((state) => state.pages);
  const [inputsValue, setInputsValue] = useState<ILogin>({ email: "", password: "" });
  const [isStatusPassword, setStatusPassword] = useState<boolean>(true);


  function showPassword() {
    setStatusPassword(!isStatusPassword);
  }

  function handleChangeInput(evt: ChangeEvent<HTMLInputElement>) {
    setInputsValue({ ...inputsValue, [evt.target.name]: evt.target.value });
  }

  function submitForm(evt: FormEvent) {
    evt.preventDefault();
    dispatch(login(inputsValue) as any);
    navigation(-1);
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

        <Input
          type={isStatusPassword ? "password" : "text"}
          name="password"
          placeholder="Пароль"
          value={inputsValue.password || ""}
          onChange={handleChangeInput}
          icon={isStatusPassword ? "ShowIcon" : "HideIcon"}
          onIconClick={showPassword}
          minLength={6}
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
