import React from "react";
import { useNavigate } from "react-router-dom";
/// useNavigate is used for programatically routing

const OderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order is completed!</h1>
      <button onClick={() => navigate(-1)}>Back to Home</button>
    </div>
  );
};

export default OderSummary;
