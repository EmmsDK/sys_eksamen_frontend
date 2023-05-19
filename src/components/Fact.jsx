import React, { useState } from 'react';

function Fact({ fact,id,category, subcategory }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="fact-box">
            <div className="fact-header" onClick={toggleExpanded}>
                <h2>
                    {id}
                    {expanded ? ' ▲' : ' ▼'}
                </h2>
            </div>
            {expanded && (
                <div className="fact-details">
                    <label>
                        <h3>fact:</h3>
                        <div
                            className="autoscale-field"
                            dangerouslySetInnerHTML={{ __html: taxonomy }}
                        ></div>
                    </label>
                    <br />
                    <label>
                        <h3>category:</h3>
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

export default Fact;
