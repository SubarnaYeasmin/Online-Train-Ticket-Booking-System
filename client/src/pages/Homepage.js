import React, { useEffect } from "react";
import axios from "axios";
const Homepage = () => {
  //LOGIN USER DATA
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <div>Homepage</div>;
};

export default Homepage;
