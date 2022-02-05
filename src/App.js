import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OderSummary from "./components/OderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Admin from "./components/Admin";
// before patha slash or without slash no problem
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="order-summary" element={<OderSummary />} />
        <Route path="products" element={<Products />}>
          {/* index is used to show to one of the nested products by default */}
          <Route index element={<New />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>

        {/* useId param is used for daynaming routing that means we that the pattern is valid a lot of users where it is impossilbe to crate a route for each user. when exact match is found then dynamic route in not applied . then it takes the exact route. but if in this case after user if admin is not find then dynamic route is applied and dynamic route can also be nested */}
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetail />} />

          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
