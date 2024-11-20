import React from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <div className="md:hidden ">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
