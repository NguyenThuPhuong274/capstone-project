import React from "react";
import Dashboard from "../admin/dashboard";
import UserHomePage from "../user/home";


const HomePage = () => {
  const [role, setRole] = React.useState("admin");

  return (
    <>
      {role == "admin" ? <Dashboard /> : <UserHomePage />}
    </>
  );
}

export default HomePage;
