import React from "react";
import { Link, Outlet } from "react-router-dom";
///OutLet is used to show nested compnent on UI
/// this page we use nested routing and we use Link in stead of NavLink

const Products = () => {
  return (
    <>
      <div>
        <h1>Our Exclusive Products</h1>
        <input type="search" placeholder="search your products" />
        {/* no slash in case of nested route */}
      </div>

      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
