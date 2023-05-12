import React, { useState, useEffect } from "react";
import facade from "../apiFacade.js";
import InputField from "./InputField.jsx";

function LoggedIn({ user }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  useEffect(() => {
    const url = user.roles.split(",").includes("user")
      ? "/api/info/user"
      : "/api/info/admin";
    facade.fetchData(url).then((res) => {
      console.log(res);
      setDataFromServer(res.msg);
      console.log("User:", user);
    });
  }, []);

  return (
    <div>
      <h3>Data Received from server</h3>
      <h4>{dataFromServer}</h4>
      <h5>
        {user.username} with roles: {user.roles}
      </h5>
      <div>
        
        <InputField username={user.username} />
      </div>
    </div>
  );
}

export default LoggedIn;

