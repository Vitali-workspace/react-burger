import { FC } from "react";
import OrderList from "../../components/order-list/order-list";
import styleHistory from "./profile-history.module.css"


const ProfileHistory: FC = () => {

  return (
    <section className={styleHistory.container} >
      <OrderList />
    </section>
  )

}

export default ProfileHistory;
