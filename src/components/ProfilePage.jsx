import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AllFavAnimalURL, RemoveFavAnimalURL} from '../Setting.js';
import Animal from './Animal.jsx';

function ProfilePage({ user }) {
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);

    useEffect(() => {
        // Check if the favorite animals data exists in local storage
        const storedData = localStorage.getItem('favoriteAnimals');
        if (storedData) {
            setFavoriteAnimals(JSON.parse(storedData));
        } else {
            fetch(`${AllFavAnimalURL}?username=${user.username}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Request failed with status ' + response.status);
                    }
                    return response.json();
                })
                .then((data) => {
                    setFavoriteAnimals(data);
                    // Store the favorite animals data in local storage
                    localStorage.setItem('favoriteAnimals', JSON.stringify(data));
                })
                .catch((error) => {
                    console.error('Error occurred during fetch:', error);
                    // Handle the error (e.g., show an error message, retry the request, etc.)
                });
        }
    }, [user.username]);

    function removeFavoriteAnimal(animalName) {
        fetch(RemoveFavAnimalURL + `/${animalName}`, { method: 'DELETE' }).then(() => {
            setFavoriteAnimals((prevFavorites) =>
                prevFavorites.filter((_, i) => i !== index)
            );
            // Update the favorite animals data in local storage
            localStorage.setItem('favoriteAnimals', JSON.stringify(favoriteAnimals));
        });
    }

    return (
        <div>
            <h1>Welcome to my profile page</h1>
            <div>
                <h3>Favorite Animals:</h3>
                <ul>
                    {favoriteAnimals.map((favorite, index) => (
                        <li key={favorite.animalName}>
                            <Animal
                                animalName={favorite.animalName}
                                taxonomy={favorite.taxonomy}
                                characteristics={favorite.characteristics}
                            />
                            <button onClick={() => removeFavoriteAnimal(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
