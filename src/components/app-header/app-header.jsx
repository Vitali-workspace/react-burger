import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleAppHeader from "./app-header.module.css";

function AppHeader() {

  return (
    <section className={styleAppHeader.header + " p-4"}>
      <div className={styleAppHeader.block}>

        <nav className={styleAppHeader.navigation}>
          <ul className={styleAppHeader.list}>
            <li className="pl-5 pr-5">
              <a className={styleAppHeader.link} href="http://localhost:3000/">
                {<BurgerIcon type="primary" />}
                <p className="text text_type_main-default pl-2 pr-2">Конструктор</p>
              </a>
            </li>

            <li className="pl-5 pr-5">
              <a className={styleAppHeader.link} href="http://localhost:3000/">
                {<ListIcon type="secondary" />}
                <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
              </a>
            </li>
          </ul>
        </nav>

        <a className={styleAppHeader.logo + " mt-1"} href="http://localhost:3000/">
          <Logo />
        </a>
        <a className={styleAppHeader.link} href="http://localhost:3000/">
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive pl-2 pr-5">Личный кабинет</p>
        </a>
      </div>
    </section>
  );
}

export default AppHeader;