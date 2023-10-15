import React from "react";
import { useGlobalContext, useSidebarContext } from "../../../context";

export const Header: React.FC = () => {
  const { cart } = useGlobalContext();
  const { toggleSidebar } = useSidebarContext();
  return (
    <header className="header">
      <h1>ECCOMERCE APP</h1>
      <div className="cart-icon" onClick={toggleSidebar}>
        <span>{cart.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2.5 2.5 0 0 0 2.44 2.11h10.76a2.5 2.5 0 0 0 2.44-2.11L23 6H6" />
        </svg>
      </div>
    </header>
  );
};
