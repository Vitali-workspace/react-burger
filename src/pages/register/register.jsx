import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styleRegister from "./register.module.css";


function Register() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation("/login");
  }


  return (
    <section className={styleRegister.container}>
      <h2 className={`text text_type_main-medium + ${styleRegister.title}`}>Регистрация</h2>
      <form className={styleRegister.inputs} onSubmit={submitForm}>
        <Input
          type="text"
          name="name"
          placeholder="Имя"
          required
        />
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

        <div className={styleRegister.button}>
          <Button htmlType="button" type="primary" size="medium">
            Зарегистрироваться
          </Button>
        </div>
      </form>

      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link className={styleRegister.link} to="/login"> Войти</Link>
      </p>
    </section>
  );
}

export default Register;