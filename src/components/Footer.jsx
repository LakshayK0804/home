import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/LakshayK0804"
        aria-label="My GitHub"
      >
        Lakshay Kalra
      </a>{" "}
      using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
          Coded with love by a pationate 16 year old.
        </small>
      </p>
    </footer>
  );
};

export default Footer;
