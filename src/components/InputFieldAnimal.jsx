import React, { useState } from "react";
import { AnimalUrl } from "../Setting.js";

function InputFieldAnimal({ user }) {
    const [inputData, setInputData] = useState("");
    const [animalData, setAnimalData] = useState(null); // New state for animal data

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(AnimalUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inputData: inputData,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            setAnimalData(data); // Set the received animal data
        } else {
            // handle error
        }
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
            {animalData && ( // Conditionally render the animal fields
                <div>
                    <h2>Animal Information</h2>
                    <p>Animal Name: {animalData.animalName}</p>
                    <p>Taxonomy: {animalData.taxonomy}</p>
                    <p>Characteristics: {animalData.characteristics}</p>
                </div>
            )}
        </div>
    );
}

export default InputFieldAnimal;
