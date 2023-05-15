import React, {useState} from 'react';
import axios from 'axios';
import {FactURL, FavFactURL, RapidKey} from '../Setting.js'

function RandomFact() {
    const [input, setInput] = useState('');
    const [fact, setFact] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleGetFactClick = async () => {
        if (input) {
            const response = await axios.get(
                FactURL,
                {
                    headers: {
                        'X-RapidAPI-Key': RapidKey,
                        'X-RapidAPI-Host': 'random-facts1.p.rapidapi.com',
                    },
                    params: {
                        fact: input,
                    },
                }
            );
            setFact(input);
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
        if (fact) {
            const response = await axios.post(FavFactURL, {
                fact: fact,
            });
            console.log(response.data);
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput}/>
            <button onClick={handleGetFactClick}>Get Fact</button>
            <p>{fact}</p>
            {fact && (
                <button onClick={handleSaveAsFavoriteClick}>Save as Favorite</button>
            )}
        </div>
    );
}

export default RandomFact;

