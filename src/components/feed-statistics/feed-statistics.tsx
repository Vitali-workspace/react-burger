import { FC } from "react";
import styleStatistics from "./feed-statistics.module.css"


const FeedStatistics: FC = () => {

  return (
    <section className={styleStatistics.container + " ml-15 mt-10"}>

      <div className={styleStatistics.header}>
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
        <h3 className="text text_type_main-medium mt-15">Выполнено за всё время:</h3>
        <span className="text text_type_digits-large">3</span>
      </div>
      <div>
        <h3 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h3>
        <span className="text text_type_digits-large">1</span>
      </div>

    </section>
  )

}

export default FeedStatistics;
