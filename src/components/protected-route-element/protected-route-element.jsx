import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';


function ProtectedRouteElement({ children }) {

  const { isAuthorized } = useSelector(state => state.pages);

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  children: PropTypes.element,
};