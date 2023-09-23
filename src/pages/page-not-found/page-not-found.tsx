import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import stylePage from "./page-not-found.module.css";


const PageNotFound: FC = () => {

  const navigation = useNavigate();

  function handleClick() {
    navigation(-1);
  }

  return (
    <section className={stylePage.container}>
      <h1 className="text text_type_digits-large">404</h1>
      <p className="text text_type_digits-medium">Страница не найдена</p>
      <Button htmlType="button" type="primary" size="medium" onClick={handleClick}>Назад</Button>
    </section>
  );
}

export default PageNotFound;