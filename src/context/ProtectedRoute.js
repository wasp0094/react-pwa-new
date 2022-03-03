import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import AppStart from "../components/app-start/app-start.component";

function ProtectedRoute({ children }) {
  let { user, loadingUser } = useUserAuth();
  if (loadingUser) {
    return <AppStart />;
  }
  if (!user && !loadingUser) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;

// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "../contexts/AuthContext"
// export default function PrivateRoute({ component: Component, ...rest }
// ) {
//     const { currentuser } = useAuth()
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 currentuser ? <Component {...props} /> : <Redirect to="/
//         login" />
//             }}
//         ></Route >
//     )
// }
