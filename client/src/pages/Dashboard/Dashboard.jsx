import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const { firstName, lastName } = user;

  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }

  return (
    <div>
      <h1>
        Hello {firstName} {lastName}
      </h1>
    </div>
  );
}

export default Dashboard;
