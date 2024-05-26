import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-center text-lg-start d-flex justify-content-between"
      style={{ backgroundColor: "black" }}
    >
      <div className="text-center p-3">
        ©2024 Coffee Concepts Retail Co.,Ltd. All rights
      </div>
      <div className="text-center p-3">Starbucks Thailand</div>
    </footer>
  );
};

export default Footer;
