import React from "react";
import Appbar from "../../components/appbar/Appbar";
import { Navigation } from "../../types/common";

const navLinks: Navigation[] = [
  {
    name: "Home",
    location: "/dashboard",
  },
];

const LandingPage = () => {
  const isLoggedIn = false; // TODO: This will come from context

  return (
    <>
      <header>
        <Appbar navLinks={navLinks} isLoggedIn={isLoggedIn} />
      </header>
      <main></main>
    </>
  );
};

export default LandingPage;
