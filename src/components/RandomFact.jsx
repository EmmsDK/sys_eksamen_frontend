import React, { useState, useEffect } from 'react';

function RandomFacts() {
  const [facts, setFacts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = `https://random-facts1.p.rapidapi.com/fact/search?q=${query}`;
    const headers = {
      'X-RapidAPI-Key': 'd5dd72de82mshcf6fc0cf7c28a79p1bdbf0jsn5189c1b81892',
      'X-RapidAPI-Host': 'random-facts1.p.rapidapi.com',
    };

    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => setFacts(data.results))
      .catch((error) => console.log(error));
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h1>Random Facts</h1>
      <input type="text" value={query} onChange={handleInputChange} />
      <ul>
        {facts.map((fact) => (
          <li key={fact.id}>{fact.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RandomFacts;
