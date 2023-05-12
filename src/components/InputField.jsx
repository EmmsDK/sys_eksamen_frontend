import React, { useState } from "react";
import {DTOUrl} from "../Setting.js";




const InputField = ({ username }) => {
  const [inputData, setInputData] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(DTOUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { username: username, 
        inputData: inputData 
      }
      ),
    });

    if (response.ok) {
      // handle success
    } else {
      // handle error
    }
  };

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={inputData} onChange={handleChange} />
      </label>
      <button type="submit">{username}</button>
    </form>
  );
};

export default InputField;
