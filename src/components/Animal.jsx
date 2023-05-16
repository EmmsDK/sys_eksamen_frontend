import React from 'react';

function Animal({ animalName, taxonomy, characteristics }) {
    return (
        <div>
            <label>
                Animal name:
                <div className="autoscale-field">{animalName}</div>
            </label>
            <br />
            <label>
                Taxonomy:
                <div className="autoscale-field">{taxonomy}</div>
            </label>
            <br />
            <label>
                Characteristics:
                <div className="autoscale-field">{characteristics}</div>
            </label>
        </div>
    );
}

export default Animal;
