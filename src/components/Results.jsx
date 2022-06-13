import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ResultContext from '../contexts/ResultContextProvider';
import Loading from './Loading';

function Results() {
  const { results, loading, getResults, searchTerm } =
    useContext(ResultContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  return <div>Results</div>;
}

export default Results;
