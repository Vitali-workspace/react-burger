import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';


function ProtectedRouteElement({ children, anonymous }) {

  const { isAuthorized } = useSelector(state => state.pages);

  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && isAuthorized) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}


export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  children: PropTypes.element,
  anonymous: PropTypes.bool,
};