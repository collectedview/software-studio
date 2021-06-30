import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <div className="container">{children}</div>
  </>
);

export default Layout;
