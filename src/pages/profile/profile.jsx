import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from 'react-router-dom';
import styleProfile from "./profile.module.css";


function Profile() {

  function out() {

  }

  function submitForm(evt) {
    evt.preventDefault();
  }

  return (
    <section className={styleProfile.container}>
      <div className={styleProfile.navigation}>
        <ul className={styleProfile.list}>
          <li><Link className={styleProfile.link} to="/profile/orders">Профиль</Link></li>
          <li><Link className={styleProfile.link} to="/profile/orders/:id">История заказов</Link></li>
          <li><button className={styleProfile.link}>Выход</button></li>
        </ul>
        <p className="text text_type_main-default text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <div>
        <form className={styleProfile.inputs} onSubmit={"submitForm"}>
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
          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            // value={"password" || ''}
            // onChange={"handleChangeInput"}
            minLength={3}
            required
          />
          <div className={styleProfile.button}>
            <Button htmlType="button" type="primary" size="medium">
              Зарегистрироваться
            </Button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Profile;