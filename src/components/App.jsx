import {Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "redux/auth/auth-operations";
import useAuth from "hooks/hooks";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import Home from "pages/Home/Home";
import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Contacts from "pages/Contacts/Contacts";

// const Home = lazy(() => import('../pages/Home/Home'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b> 
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route path="/login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route path="/contacts" element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Route>
    </Routes>
  );
};