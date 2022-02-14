import React, { ReactNode } from "react";
// layout
import Header from "./Header";
// styled components
import { LayoutWrapper } from "./AppLayout.style";
// -----------------------------------------------------------

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
