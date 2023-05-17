import React from 'react';

function Animal({ animalName, taxonomy, characteristics }) {
    return (
        <div>
            <label>
                <h3>Animal name:</h3>
                <div className="autoscale-field">{animalName}</div>
            </label>
            <br />
            <label>
                <h3>Taxonomy:</h3>
                <div
                    className="autoscale-field"
                    dangerouslySetInnerHTML={{ __html: taxonomy }}
                ></div>
            </label>
            <br />
            <label>
                <h3>Characteristics:</h3>
                <div
                    className="autoscale-field"
                    dangerouslySetInnerHTML={{ __html: characteristics }}
                ></div>
            </label>
        </div>
    );
}

export default Animal;
