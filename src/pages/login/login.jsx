import { Button, ShowIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleLogin from "./login.module.css";

function Login() {


  return (
    <section className={styleLogin.container}>
      <div className={styleLogin.content}>
        <h2>Вход</h2>
        <input type="text" />
        <input type="text" />
        <Button htmlType="button" type="primary" size="medium">
          Войти
        </Button>
        <ShowIcon type="primary" />
      </div>
      <p>Вы — новый пользователь? <button>Зарегистрироваться</button></p>
      <p>Забыли пароль? <button>Восстановить пароль</button></p>
    </section>
  );
}

export default Login;