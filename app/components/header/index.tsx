import type React from "react";
import "./header.scss";

export default function Header(props: { children?: React.ReactNode }) {
  return (
    <div className="container">
      <div className="header-title">
        <p className="title">Projeto Baja</p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
