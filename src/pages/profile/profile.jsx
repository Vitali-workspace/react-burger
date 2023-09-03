
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/action-profile";
import ProfileUser from '../profile-user/profile-user';
import styleProfile from "./profile.module.css";


function Profile() {

  const styleLink = `${styleProfile.link} text text_type_main-medium text_color_inactive`;
  const styleLinkActive = `${styleProfile.active} text text_type_main-medium`;
  const dispatch = useDispatch();
  const navigation = useNavigate();

  function exit() {
    dispatch(logout());
    navigation("/login");
  }


  return (
    <section className={`${styleProfile.container} mt-30`}>
      <div className={styleProfile.navigation}>
        <ul className={styleProfile.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styleLinkActive : styleLink)}
              to="/profile">
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styleLinkActive : styleLink)}
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
        <p className={`${styleProfile.description} text text_type_main-default mt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <ProfileUser />
    </section>
  )
}

export default Profile;