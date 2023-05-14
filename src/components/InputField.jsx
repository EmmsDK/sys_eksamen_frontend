import React, { useState } from "react";
import {DTOUrl} from "../Setting.js";




function InputField  ({ user })  {
  
  const [inputData, setInputData] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(DTOUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        { 
        username: user.username,
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
      <button type="submit">Get fact</button>
    </form>
  );
};

export default InputField;
