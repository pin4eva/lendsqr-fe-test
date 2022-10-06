import { Route, Routes } from "react-router-dom";
import LoginView from "./auth/views/login.view";
import UserHomeView from "./user/views/user-home.view";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<UserHomeView />} />
      <Route path="/login" element={<LoginView />} />
    </Routes>
  );
};

export default AppRoute;
