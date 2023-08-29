import { Button, ShowIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleRegister from "./register.module.css";

function Register() {


  return (
    <section className={styleRegister.container}>
      <div className={styleRegister.content}>
        <h2>Регистрация</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
        <ShowIcon type="primary" />
      </div>
      <p>Уже зарегистрированы? <button>Войти</button></p>
    </section>
  );
}

export default Register;