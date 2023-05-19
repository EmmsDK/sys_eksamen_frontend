import React, {useState} from 'react';
import axios from 'axios';
import { FactUrl, FavFactURL, homemadeURL} from '../Setting.js'

function RandomFact() {
    const [input, setInput] = useState('');
    const [newFact, setNewFact] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleGetFactClick = async () => {
        try {
          const cacheControl = 'no-cache'; // Cache control header value
          
          const response = await fetch(`${homemadeURL}?category=${input}`, {
            headers: {
              'Cache-Control': cacheControl
            }
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log(input);
            setNewFact(data);
          } else {
            console.error('Error fetching random fact:', response.status);
          }
        } catch (error) {
          console.error('Error fetching random fact:', error);
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
        if (newFact) {
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
            <p>{newFact}</p>
            {newFact && (
                <button onClick={handleSaveAsFavoriteClick}>Save as Favorite</button>
            )}
        </div>
    );
}

export default RandomFact;

