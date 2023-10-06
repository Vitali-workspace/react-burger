import { FC } from "react";
import styleStatistics from "./feed-statistics.module.css"


const FeedStatistics: FC = () => {

  return (
    <section className={styleStatistics.container + " ml-15 mt-15"}>

      <div className={styleStatistics.header}>
        <div className={styleStatistics.block}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={styleStatistics.list + " text text_type_digits-default " + styleStatistics.success}>
            <li>034535</li>
            <li>034535</li>
            <li>034535</li>
            <li>034535</li>
            <li>034535</li>
          </ul>
        </div>

        <div className={styleStatistics.block}>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <ul className={"text text_type_digits-default " + styleStatistics.list}>
            <li>034535</li>
            <li>034535</li>
            <li>034535</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text text_type_main-medium mt-15">Выполнено за всё время:</h3>
        <span className="text text_type_digits-large">28753</span>
      </div>
      <div>
        <h3 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h3>
        <span className="text text_type_digits-large">138</span>
      </div>

    </section>
  )

}

export default FeedStatistics;
