import { FC } from "react";
import styleOrderFeed from "./order-feed.module.css"

const orderFeed: FC = () => {


  return (
    <section className={styleOrderFeed.container}>
      <h2>Лента заказов</h2>
      <div>
        <ul className={styleOrderFeed.list}>
          <li></li>
        </ul>
      </div>

      <div>
        <div>
          <div>
            <h3 className="text text_type_main-medium">Готовы:</h3>
            <ul>
              <li></li>
            </ul>
          </div>

          <div>
            <h3 className="text text_type_main-medium">В работе:</h3>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text text_type_main-medium">Выполнено за всё время:</h3>
          <span className="text text_type_digits-large">3</span>
        </div>
        <div>
          <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
          <span className="text text_type_digits-large">1</span>
        </div>
      </div>
    </section>
  )

}

export default orderFeed;
