import { FC } from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import styleAppHeader from "./app-header.module.css";

const activeStyle = { color: "#F2F2F3" };
const inactiveStyle = { color: "#8585AD" };
const activeLink = ({ isActive }: { isActive: boolean }) => isActive ? activeStyle : inactiveStyle;


const AppHeader: FC = () => {

  const { isAuthorized } = useSelector((state: any) => state.pages);

  return (
    <header className={styleAppHeader.header + " p-4"}>
      <div className={styleAppHeader.block}>

        <nav className={styleAppHeader.navigation}>
          <ul className={styleAppHeader.list}>

            <li className="pl-5 pr-5">
              <NavLink
                className={styleAppHeader.link}
                style={activeLink}
                to="/">
                {({ isActive }) => (
                  <>
                    <BurgerIcon type={isActive ? "primary" : "secondary"} />
                    <p className="text text_type_main-default pl-2 pr-2">Конструктор</p>
                  </>
                )}
              </NavLink>
            </li>

            <li className="pl-5 pr-5">
              <NavLink
                className={styleAppHeader.link}
                to="/feed"
                style={activeLink}>
                {({ isActive }) => (
                  <>
                    {<ListIcon type={isActive ? "primary" : "secondary"} />}
                    <p className="text text_type_main-default pl-2">Лента заказов</p>
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link className={styleAppHeader.logo + " mt-1"} to="/">
          <Logo />
        </Link>

        <div className={styleAppHeader.list}>
          <NavLink
            className={styleAppHeader.link}
            to={isAuthorized ? "/profile" : "/login"}
            style={activeLink}>
            {({ isActive }) => (
              <>
                <ProfileIcon type={isActive ? "primary" : "secondary"} />
                <p className="text text_type_main-default pl-2 pr-5">Личный кабинет</p>
              </>
            )}
          </NavLink>
        </div>

      </div>
    </header>
  );
}

export default AppHeader;