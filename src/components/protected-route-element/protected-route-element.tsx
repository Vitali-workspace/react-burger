import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/services-hooks";

interface IProtectedRouteProps {
  children?: ReactNode;
  anonymous?: boolean;
}


const ProtectedRouteElement: FC<IProtectedRouteProps> = ({ children, anonymous }) => {

  const { isAuthorized } = useAppSelector((state) => state.pages);

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

