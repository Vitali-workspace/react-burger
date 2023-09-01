import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styleReset from "./reset-password.module.css";


function ResetPassword() {

  const navigation = useNavigate();

  function submitForm(evt) {
    evt.preventDefault();
    navigation("/login");
  }

  return (
    <section className={styleReset.container}>
      <h2 className={`text text_type_main-medium + ${styleReset.title}`}>Восстановление пароля</h2>

      <form className={styleReset.inputs} onSubmit={submitForm}>
        <PasswordInput
          type="password"
          name="password"
          placeholder="Введите новый пароль"
          // value={"password" || ''}
          // onChange={"handleChangeInput"}
          minLength={3}
          required
        />
        <Input
          type="text"
          name="код"
          placeholder="Введите код из письма"
          // value={"email" || ""}
          // onChange={"handleChangeInput"}
          required
        />

        <div className={styleReset.button}>
          <Button htmlType="button" type="primary" size="medium">
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