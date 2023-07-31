import React from "react";
import Navbar from "./components/Navbar";
import background from "./img/mapMain.png";
import TopCont01 from "./components/TopCont01";

export default function Header() {
  return (
    <div
      className="header_body"
      style={{
        backgroundImage: `url(${background})`,
        opacity: "",
        backgroundSize: "cover",
        // backgroundSize: "70% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <TopCont01 />
    </div>
  );
}
