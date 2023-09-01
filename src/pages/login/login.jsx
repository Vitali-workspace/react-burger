import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styleLogin from "./login.module.css";

function Login() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation("/");
  }

  return (
    <section className={styleLogin.container}>

      <h2 className={`text text_type_main-medium + ${styleLogin.title}`}>Вход</h2>
      <form className={styleLogin.inputs} onSubmit={submitForm}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          // value={"email" || ""}
          // onChange={"handleChangeInput"}
          required
        />

        <PasswordInput
          type="password"
          name="password"
          placeholder="Пароль"
          // value={"password" || ''}
          // onChange={"handleChangeInput"}
          minLength={3}
          required
        />

        <div className={styleLogin.button}>
          <Button htmlType="button" type="primary" size="medium">
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
        <Link className={styleLogin.link} to="/forgot-password"> Восстановить пароль</Link>
      </p>
    </section>
  );
}

export default Login;