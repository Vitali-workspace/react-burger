import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';
import styleAppHeader from "./app-header.module.css";

function AppHeader() {

  return (
    <header className={styleAppHeader.header + " p-4"}>
      <div className={styleAppHeader.block}>

        <nav className={styleAppHeader.navigation}>
          <ul className={styleAppHeader.list}>
            <li className="pl-5 pr-5">
              <Link className={styleAppHeader.link} to="/">
                {<BurgerIcon type="primary" />}
                <p className="text text_type_main-default pl-2 pr-2">Конструктор</p>
              </Link>
            </li>

            <li className="pl-5 pr-5">
              <Link className={styleAppHeader.link} to="/login">
                {<ListIcon type="secondary" />}
                <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
              </Link>
            </li>
          </ul>
        </nav>

        <Link className={styleAppHeader.logo + " mt-1"} to="/">
          <Logo />
        </Link>
        <Link className={styleAppHeader.link} to="/profile">
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2 pr-5">Личный кабинет</p>
        </Link>
      </div>
    </header>
  );
}

export default AppHeader;