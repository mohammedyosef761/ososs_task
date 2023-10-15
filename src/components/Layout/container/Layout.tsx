import React from "react";
import { Header, Sidebar } from "../components";
import "../styles/styles.scss";
import { useSidebarContext } from "../../../context";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <div className="layout">
      <Header />
      <main className={`content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        {children}
      </main>
      <Sidebar />
    </div>
  );
};
