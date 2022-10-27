import React from "react";
import "./error.css";

const Error = () => {
  return (
    <div className="page-not-found flex-center-center flex-col">
      <img src="/images/404.png" alt="404" width="400" />
      <h1 className="text-60 opacity-5">Page Not Found</h1>
    </div>
  );
};

export default Error;
