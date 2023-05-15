import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {FavFactURL, FavAnimalURL} from '../Setting.js'

function ProfilePage() {
    const [favoriteFacts, setFavoriteFacts] = useState([]);
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);

    // Fetch favorite facts from the API on mount
    useEffect(() => {
        fetch(FavFactURL)
            .then(response => response.json())
            .then(data => {
                setFavoriteFacts(data);
            });
    }, []);

    useEffect(() => {
        fetch(FavAnimalURL)
            .then(response => response.json())
            .then(data => {
                setFavoriteAnimals(data);
            });
    }, []);

    // Function to remove a favorite fact from the backend API and the state
    function removeFavoriteFact(id) {
        fetch(FavFactURL+`${id}`, { method: 'DELETE' })
            .then(() => {
                setFavoriteFacts(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
            });
    }
    function removeFavoriteAnimal(id) {
        fetch(FavAnimalURL+`${id}`, { method: 'DELETE' })
            .then(() => {
                setFavoriteAnimals(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
            });
    }

    return (
        <div>
            <h1>Welcome to my profile page</h1>
            <div>
                <h3>Favorite Random Facts:</h3>
                <ul>
                    {favoriteFacts.map(favorite => (
                        <li key={favorite.id}>
                            <span>{favorite.body}</span>
                            <button onClick={() => removeFavoriteFact(favorite.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <h3>Favorite Animal Facts:</h3>
                <ul>
                    {favoriteAnimals.map(favorite => (
                        <li key={favorite.id}>
                            <span>{favorite.body}</span>
                            <button onClick={() => removeFavoriteAnimal(favorite.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
export default ProfilePage;