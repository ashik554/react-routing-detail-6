import React from "react";
import { useParams } from "react-router-dom";
//this hook is used to show something that is written after url.(what you wwrite after the url you can see this on UI)

const UserDetail = () => {
  const { userId } = useParams();

  // this userId that we defined on the app.js we extracted here
  return (
    <div>
      <p>This is our user detail {userId}</p>
    </div>
  );
};

export default UserDetail;
