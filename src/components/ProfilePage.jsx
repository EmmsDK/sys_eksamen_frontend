import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AllFavAnimalURL, RemoveFavAnimalURL} from '../Setting.js';
import Animal from './Animal.jsx';
import "../styles/ProfilePage.css";

function ProfilePage({ user }) {
    const [favoriteAnimals, setFavoriteAnimals] = useState([]);
    const [refreshAnimals, setRefreshAnimals] = useState(false); // New refresh flag

    useEffect(() => {
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
    }, [user.username, refreshAnimals]); // Include refreshAnimals in the dependency array

    function removeFavoriteAnimal(animalName) {
        fetch(`${RemoveFavAnimalURL}?username=${encodeURIComponent(user.username)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: animalName
        })
            .then(() => {
                setFavoriteAnimals(prevFavorites =>
                    prevFavorites.filter(animal => animal.name !== animalName)
                );
                // Update the favorite animals data in local storage
                localStorage.setItem('favoriteAnimals', JSON.stringify(favoriteAnimals));
                setRefreshAnimals(prevRefresh => !prevRefresh); // Trigger refresh by toggling the flag
            })
            .catch(error => {
                console.error('Error occurred while removing favorite animal:', error);
            });
    }




    return (
        <div>
            <h1>Welcome to my profile page</h1> {/* Add onClick handler to the header */}
            <div>
                <h1>Favorite Animals:</h1>
                <ul className="favorite-animal-list">
                    {favoriteAnimals.map((favorite) => (
                        <li key={favorite.animalName}>
                            <Animal
                                animalName={favorite.animalName}
                                taxonomy={favorite.taxonomy}
                                characteristics={favorite.characteristics}
                            />
                            <button onClick={() => removeFavoriteAnimal(favorite.animalName)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProfilePage;
