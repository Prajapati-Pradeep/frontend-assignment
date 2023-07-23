import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="container pt-3">
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
