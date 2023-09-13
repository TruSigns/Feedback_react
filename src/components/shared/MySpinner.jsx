import React from "react";
import spin from "../assets/spinner.gif";

function MySpinner() {
  return (
    <img
      src={spin}
      alt="isloading"
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default MySpinner;
