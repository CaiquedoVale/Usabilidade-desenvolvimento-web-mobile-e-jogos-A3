import type React from "react";
import "./header.scss";

export default function Header(props: {
  children?: React.ReactNode;
  styleContainer?: React.CSSProperties;
  styleTitle?: React.CSSProperties;
}) {
  return (
    <div className="container-header" style={props.styleContainer}>
      <div className="header-title">
        <p className="title" style={props.styleTitle}>
          Projeto Baja
        </p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
