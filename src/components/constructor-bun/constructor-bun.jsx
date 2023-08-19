import PropTypes from "prop-types";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { TYPE_BUN } from "../../utils/constants";
import styleBun from "./constructor-bun.module.css"


function ConstructorBun({ type }) {

  const { bun } = useSelector(state => state.burgerConstructor);

  return (
    <li className="ml-8">
      {
        bun ?
          (
            <ConstructorElement
              type={type}
              isLocked={true}
              text={`${bun.name}\n${type === TYPE_BUN.TOP ? "(верх)" : "(низ)"} `}
              price={bun.price}
              thumbnail={bun.image}
            />
          )
          :
          (
            <div className={`${styleBun.bun} ${type ? type === TYPE_BUN.TOP ? styleBun.top : styleBun.bottom : ""}`}>
              <p className="text text_type_main-default">Выберите булку</p>
            </div>
          )

      }
    </li>
  );
}

ConstructorBun.propTypes = { type: PropTypes.string };

export default ConstructorBun;