import React, {useState} from "react";
import {AnimalUrl} from "../Setting.js";
import {FavAnimalURL} from "../Setting.js";
import Animal from "./Animal.jsx";

function InputFieldAnimal({user}) {
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


    const handleFavoriteClick = async () => {
        if (animalData) {
            const jsonData = JSON.stringify(animalData); // Convert animalData to JSON string
            const response = await fetch(`${FavAnimalURL}?username=${user.username}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonData,
            });

            const data = await response.text();
            console.log(data);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Input:
                    <input type="text" value={inputData} onChange={handleChange}/>
                </label>
                <button type="submit">Get fact</button>
            </form>
            <div>
                {animalData && (
                    <>
                        <h2>Animal Information</h2>
                        <button onClick={handleFavoriteClick}>Save as Favorite</button>
                        <Animal animalName={animalData.animalName} taxonomy={animalData.taxonomy}
                                characteristics={animalData.characteristics}/>
                    </>)}

            </div>
        </div>
    );
}

export default InputFieldAnimal;
