import React from "react";

export default function Navbar({ totalCounter }) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>
          <i className="fa fa-shopping-basket fa-lg m-2" />
          <span
            className="badge badge-pill badge-info m-2"
            style={{ width: 50 }}
          >
            {totalCounter}
          </span>
        </div>
      </nav>
    </div>
  );
}
