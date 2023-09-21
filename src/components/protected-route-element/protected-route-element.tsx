import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface IProtectedRouteProps {
  children?: ReactNode;
  anonymous?: boolean;
}


const ProtectedRouteElement: FC<IProtectedRouteProps> = ({ children, anonymous }) => {

  const { isAuthorized } = useSelector((state: any) => state.pages);

  const location = useLocation();
  const from = location.state?.from || '/';

  if (anonymous && isAuthorized) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
}


export default ProtectedRouteElement;

