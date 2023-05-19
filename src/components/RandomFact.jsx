import React, { useState } from 'react';
import { homemadeURL } from '../Setting.js';
import Fact from './Fact.jsx';

function RandomFact() {
    const [input, setInput] = useState('');
    const [factData, setFactData] = useState([]);

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleGetFactClick = async () => {
        try {
            const cacheControl = 'no-cache'; // Cache control header value

            const response = await fetch(`${homemadeURL}?category=${input}`, {
                headers: {
                    'Cache-Control': cacheControl,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                console.log(input);
                setFactData(data);
            } else {
                console.error('Error fetching random fact:', response.status);
            }
        } catch (error) {
            console.error('Error fetching random fact:', error);
        }
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleGetFactClick}>Get Fact</button>
            {factData.length > 0 && (
                <Fact
                    fact={factData[0].fact}
                    id={factData[0].id}
                    category={factData[0].category}
                    subcategory={factData[0].subcategory}
                />
            )}
        </div>
    );
}

export default RandomFact;
