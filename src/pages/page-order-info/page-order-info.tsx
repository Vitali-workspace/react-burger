import { FC, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks/services-hooks";
import { WS_URL_PROFILE_ORDERS, WS_URL_ALL_ORDERS } from "../../utils/constants";
import { wsActionConnectionStart } from "../../services/actions/action-web-socket";
import { checkOrders } from "../../utils/utils-order-feed";
import { actionCheckOrders } from "../../services/actions/action-order-feed";
import { getCookie } from "../../utils/cookie-api";
import ModalOrderInfo from "../../components/modal-order-info/modal-order-info";



const PageOrderInfo: FC = () => {

  const dispatch = useAppDispatch();
  const location = useLocation();

  const token = { access: "accessToken", refresh: "refreshToken" };
  const cookie = getCookie(token.access);
  const accessToken = cookie && cookie.split(' ')[1];

  const wsSwitchUrl = location.pathname === "/feed/:id"
    ? WS_URL_PROFILE_ORDERS + `?token=${accessToken}`
    : WS_URL_ALL_ORDERS;

  useEffect(() => {
    dispatch(wsActionConnectionStart(wsSwitchUrl));
  }, [dispatch]);


  const { orders } = useAppSelector((state) => state.webSocket);
  const ingredientsInfo = useAppSelector((state) => state.burgerIngredients.ingredients);
  const validOrders = useMemo(() => checkOrders(orders, ingredientsInfo), [orders, ingredientsInfo]);


  useEffect(() => {
    if (validOrders.length) {
      dispatch(actionCheckOrders(validOrders));
    }
  }, [validOrders]);


  return (
    <div>
      <ModalOrderInfo />
    </div>
  )

}

export default PageOrderInfo;