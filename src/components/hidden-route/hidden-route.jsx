import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";


function HiddenRoute() {
  const { isAuthorized } = useSelector(state => state.pages);
  const navigate = useNavigate();
  return isAuthorized ? <>{navigate(-1)}</> : <Outlet />;
}

export default HiddenRoute;