import React from "react";
import "./scroll-indicator.scss";

const ScrollDownIndicator: React.FC = () => (
  <div className="scroll-indicator">
    <span className="scroll-text">role para saber mais</span>
    <span className="arrow">&#8595;</span>
  </div>
);

export default ScrollDownIndicator;
