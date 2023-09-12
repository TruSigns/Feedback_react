import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return (
    // <div className={`card ${reverse && 'reverse' }`}>
    //   {children}
    // </div>

    <div
      className="card"
      style={{
        backgroundColor: reverse ? "black" : "orange",
        color: reverse ? "orange" : "blue",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
