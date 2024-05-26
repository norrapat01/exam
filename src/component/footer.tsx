import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4"></div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 YourWebsite.com
      </div>
    </footer>
  );
};

export default Footer;
