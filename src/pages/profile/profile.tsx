import { FC } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from "../../services/hooks/services-hooks";
import { logout } from "../../services/actions/action-profile";
import { AppThunkAction } from "../../services/types/services-types";
import ProfileUser from '../profile-user/profile-user';
import ProfileHistory from "../profile-history/profile-history";
import styleProfile from "./profile.module.css";


const Profile: FC = () => {

  const location = useLocation();

  const styleLink = `${styleProfile.link} text text_type_main-medium text_color_inactive`;
  const styleLinkActive = `${styleProfile.active} text text_type_main-medium`;

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  function exit() {
    dispatch(logout() as AppThunkAction);
    navigation("/login");
  }


  return (
    <section className={`${styleProfile.container} mt-30`}>
      <div className={styleProfile.navigation}>
        <ul className={styleProfile.list + " "}>
          <li>
            <NavLink
              className={location.pathname === "/profile" ? styleLinkActive : styleLink}
              to="/profile">
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              className={location.pathname === "/profile/orders" ? styleLinkActive : styleLink}
              to="/profile/orders">
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

      {location.pathname === "/profile/orders" ? <ProfileHistory /> : <ProfileUser />}

    </section>
  )
}

export default Profile;