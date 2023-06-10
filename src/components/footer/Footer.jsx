import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div>&copy;{year} ZoneTech. All rights reserved.</div>
      <div></div>
    </div>
  );
};

export default Footer;
