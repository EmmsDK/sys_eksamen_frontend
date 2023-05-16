import React, { useState } from "react";
import { AnimalUrl } from "../Setting.js";
import Animal from "./Animal.jsx";

function InputFieldAnimal({ user }) {
    const [inputData, setInputData] = useState("");
    const [animalData, setAnimalData] = useState("", "", ""); // New state for animal data

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(AnimalUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: inputData,
        });

        const data = await response.json();
        console.log(data); // Log the response data
        setAnimalData(data); // Set the received animal data
    };


    const handleChange = (event) => {
        setInputData(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Input:
                    <input type="text" value={inputData} onChange={handleChange} />
                </label>
                <button type="submit">Get fact</button>
            </form>
                <div>
                    <h2>Animal Information</h2>
                    <Animal animalName={animalData.animalName} taxonomy={animalData.taxonomy} characteristics={animalData.characteristics}/>
                </div>
        </div>
    );
}

export default InputFieldAnimal;
