import { FC } from "react";
import { useAppSelector } from "../../services/hooks/services-hooks";
import styleStatistics from "./feed-statistics.module.css"


const FeedStatistics: FC = () => {

  const { ready, pending } = useAppSelector((state) => state.oderFeed);
  const { total, totalToday } = useAppSelector((state) => state.webSocket);

  const maxOrdersReady = ready.slice(0, 20);
  const maxOrdersPending = pending.slice(0, 20);

  return (
    <section className={styleStatistics.container + " ml-15 mt-15"}>

      <div className={styleStatistics.header}>
        <div className={styleStatistics.block}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={styleStatistics.list + " text text_type_digits-default " + styleStatistics.success}>
            {
              maxOrdersReady.map((number, index) => (<li key={index}>{number}</li>))
            }
          </ul>
        </div>

        <div className={styleStatistics.block}>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <ul className={"text text_type_digits-default " + styleStatistics.list}>
            {
              maxOrdersPending.map((number, index) => (<li key={index}>{number}</li>))
            }
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text text_type_main-medium mt-15">Выполнено за всё время:</h3>
        <span className="text text_type_digits-large">{total}</span>
      </div>
      <div>
        <h3 className="text text_type_main-medium mt-15">Выполнено за сегодня:</h3>
        <span className="text text_type_digits-large">{totalToday}</span>
      </div>

    </section>
  )

}

export default FeedStatistics;
