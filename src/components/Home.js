import React from "react";
import { useNavigate } from "react-router-dom";
/// useNvigate is used for programtically routing

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is our home page</h1>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place your Order!
      </button>
    </div>
  );
};

export default Home;
