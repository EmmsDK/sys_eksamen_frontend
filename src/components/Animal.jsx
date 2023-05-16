import React, { useState } from 'react';

function Animal() {
    const [animalName, setAnimalName] = useState('');
    const [taxonomy, setTaxonomy] = useState('');
    const [characteristics, setCharacteristics] = useState('');

    const handleAnimalNameChange = (event) => {
        setAnimalName(event.target.value);
    };

    const handleTaxonomyChange = (event) => {
        setTaxonomy(event.target.value);
    };

    const handleCharacteristicsChange = (event) => {
        setCharacteristics(event.target.value);
    };

    return (
        <div>
            <label>
                Animal name:
                <input type="text" value={animalName} onChange={handleAnimalNameChange} />
            </label>
            <br />
            <label>
                Taxonomy:
                <input type="text" value={taxonomy} onChange={handleTaxonomyChange} />
            </label>
            <br />
            <label>
                Characteristics:
                <input
                    type="text"
                    value={characteristics}
                    onChange={handleCharacteristicsChange}
                />
            </label>
        </div>
    );
}

export default Animal;
