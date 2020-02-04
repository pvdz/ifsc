import { Link } from "gatsby";
import React from "react";

import "../styles/index.scss";

interface LayoutProps {
  readonly children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            IƒSC
          </Link>
        </div>
      </nav>
      <main>
        <section className="section">
          <div className="container">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
