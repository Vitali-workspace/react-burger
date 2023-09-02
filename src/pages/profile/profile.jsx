import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from 'react-router-dom';
import styleProfile from "./profile.module.css";


function Profile() {

  function exit() {
    //dispatch();
    console.log('ВЫход')
  }

  function submitForm(evt) {
    evt.preventDefault();
  }

  return (
    <section className={`${styleProfile.container} mt-30`}>
      <div className={styleProfile.navigation}>
        <ul className={styleProfile.list}>
          <li>
            <NavLink
              className={`${styleProfile.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styleProfile.active}
              to="/profile/orders"
              exact>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${styleProfile.link} text text_type_main-medium text_color_inactive`}
              activeClassName={styleProfile.active}
              to="/profile/orders/:id">
              История заказов
            </NavLink>
          </li>
          <li>
            <button
              className={`${styleProfile.button} text text_type_main-medium text_color_inactive`}
              onClick={exit}>
              Выход
            </button>
          </li>
        </ul>
        <p className={`${styleProfile.description} text text_type_main-default text_color_inactive mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <div>
        <form className={styleProfile.inputs} onSubmit={submitForm}>
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

        </form>
      </div>
    </section>
  )
}

export default Profile;