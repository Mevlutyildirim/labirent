import React from "react";
import "./header.css";

export default (props) => {
  return (
    <div className="header">
     {props.children}
    </div>
  );
};
