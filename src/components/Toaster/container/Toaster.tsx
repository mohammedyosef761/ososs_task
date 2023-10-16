import React from "react";
import { ToasterProps } from "../../../types";
// import "../styles/toaster.scss";

export const Toaster: React.FC<ToasterProps> = ({ message, type }) => {
  return (
    <div className={`toaster ${type} ${type ? "visible " : ""}`} >{message}</div>
  );
};
