import React from 'react';

function Animal({ animalName, taxonomy, characteristics }) {
    return (
        <div>
            <label>
                Animal name:
                <textarea value={animalName} readOnly />
            </label>
            <br />
            <label>
                Taxonomy:
                <textarea value={taxonomy} readOnly />
            </label>
            <br />
            <label>
                Characteristics:
                <textarea value={characteristics} readOnly />
            </label>
        </div>
    );
}

export default Animal;
