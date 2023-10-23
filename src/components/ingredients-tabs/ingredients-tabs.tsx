import { FC } from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from '../../services/hooks/services-hooks';
import { NAMES_INGREDIENTS } from "../../utils/constants";
import styleTabs from "./ingredients-tabs.module.css";

interface ITabs {
  tabClick: (e: string) => void;
}


const IngredientsTabs: FC<ITabs> = ({ tabClick }) => {

  const current = useAppSelector((state) => state.burgerIngredients.tab);

  return (
    <nav className={styleTabs.tabs}>
      <ul className={styleTabs.list}>
        <li>
          <Tab
            active={current === NAMES_INGREDIENTS.BUN}
            value={NAMES_INGREDIENTS.BUN}
            onClick={(e) => tabClick(e)}>
            {NAMES_INGREDIENTS.BUN}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === NAMES_INGREDIENTS.SAUCE}
            value={NAMES_INGREDIENTS.SAUCE}
            onClick={(e) => tabClick(e)}>
            {NAMES_INGREDIENTS.SAUCE}
          </Tab>
        </li>
        <li>
          <Tab
            active={current === NAMES_INGREDIENTS.MAIN}
            value={NAMES_INGREDIENTS.MAIN}
            onClick={(e) => tabClick(e)}>
            {NAMES_INGREDIENTS.MAIN}
          </Tab>
        </li>
      </ul>
    </nav>
  );
}


export default IngredientsTabs;