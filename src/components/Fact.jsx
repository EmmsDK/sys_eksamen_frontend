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
                        <h3>Fact:</h3>
                        <div
                            className="autoscale-field"
                            dangerouslySetInnerHTML={{ __html: fact }}
                        ></div>
                    </label>
                    <br />
                    <label>
                        <h3>Category:</h3>
                        <div
                            className="autoscale-field"
                            dangerouslySetInnerHTML={{ __html: category }}
                        ></div>
                    </label>
                    <br />
                    <label>
                        <h3>Subcategory:</h3>
                        <div
                            className="autoscale-field"
                            dangerouslySetInnerHTML={{ __html: subcategory }}
                        ></div>
                    </label>
                </div>
            )}
        </div>
    );
}

export default Fact;
