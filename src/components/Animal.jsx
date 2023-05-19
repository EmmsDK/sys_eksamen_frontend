import React, { useState } from 'react';

function Animal({ animalName, taxonomy, characteristics }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="animal-box">
            <div className="animal-header" onClick={toggleExpanded}>
                <h2>
                    {animalName}
                    {expanded ? ' ▲' : ' ▼'}
                </h2>
            </div>
            {expanded && (
                <div className="animal-details">
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
            )}
        </div>
    );
}

export default Animal;
