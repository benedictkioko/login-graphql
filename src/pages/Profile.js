import React, { useEffect } from "react";
import Header from "../components/Header/Header";

export default function Profile() {
  useEffect(() => {
    console.log("loggedIn");
  });
  return (
    <div>
      <Header />
      User Profile
    </div>
  );
}
