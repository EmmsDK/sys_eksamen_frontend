import React, {useState} from 'react';
import axios from 'axios';
import {AnimalURL, FavURL, RapidKey} from '../Setting.js'

function AnimalFact() {
    const [input, setInput] = useState('');
    const [animalFact, setAnimalFact] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleGetAnimalFactClick = async () => {
        if (input) {
            const response = await axios.get(
                AnimalURL,
                {
                    headers: {
                        'X-RapidAPI-Key': RapidKey,
                        'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com',
                    },
                    params: {
                        animalFact: input,
                    },
                }
            );
            setAnimalFact(input);
        }
    };

    function toggleFavorite(id) {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(id)) {
            newFavorites.delete(id);
        } else {
            newFavorites.add(id);
        }
        setFavorites(newFavorites);
    }

    const handleSaveAsFavoriteClick = async () => {
        if (animalFact) {
            const response = await axios.post(FavURL, {
                animalFact: animalFact,
            });
            console.log(response.data);
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput}/>
            <button onClick={handleGetAnimalFactClick}>Get Animal Fact</button>
            <p>{animalFact}</p>
            {animalFact && (
                <button onClick={handleSaveAsFavoriteClick}>Save as Favorite</button>
            )}
        </div>
    );
}

export default AnimalFact;

