import React from "react";

const Loader = () => {
  return (
    <div className="skeleton mb-3 m-3 shadow rounded">
      <div className="skeleton-line-one"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  );
};

export default Loader;
