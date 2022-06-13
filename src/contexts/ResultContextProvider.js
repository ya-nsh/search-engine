import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async type => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
      }
    });

    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        loading,
        searchTerm,
        setSearchTerm,
        getResults
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContext;
