import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {FavURL} from '../Setting.js'

function ProfilePage() {
    const [favorites, setFavorites] = useState([]);

    // Fetch favorite facts from the API on mount
    useEffect(() => {
        fetch(FavURL)
            .then(response => response.json())
            .then(data => {
                setFavorites(data);
            });
    }, []);

    // Function to remove a favorite fact from the backend API and the state
    function removeFavorite(id) {
        fetch(FavURL+`${id}`, { method: 'DELETE' })
            .then(() => {
                setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
            });
    }

    return (
        <div>
            <h1>Welcome to my profile page</h1>
            <div>
                <h3>Favorite Facts:</h3>
                <ul>
                    {favorites.map(favorite => (
                        <li key={favorite.id}>
                            <span>{favorite.body}</span>
                            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
export default ProfilePage;