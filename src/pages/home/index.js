import React from "react";
import Dashboard from "../admin/dashboard";
import UserHomePage from "../user/home";
import PublicHomePage from "../user/home";


const HomePage = () => {
  const [role, setRole] = React.useState("user");

  return (
    <>
      {role != null ? role == "admin" ? <Dashboard /> : <UserHomePage /> : <PublicHomePage />}
    </>
  );
}

export default HomePage;
