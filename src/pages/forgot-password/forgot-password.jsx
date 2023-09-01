import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styleForgot from "./forgot-password.module.css";


function ForgotPassword() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation("/reset-password");
  }

  return (
    <section className={styleForgot.container}>
      <h2 className={`text text_type_main-medium + ${styleForgot.title}`}>Восстановление пароля</h2>

      <form className={styleForgot.inputs} onSubmit={submitForm}>
        <Input
          type="email"
          name="email"
          placeholder="Укажите e-mail"
          // value={"email" || ""}
          // onChange={"handleChangeInput"}
          required
        />

        <div className={styleForgot.button}>
          <Button htmlType="button" type="primary" size="medium">
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