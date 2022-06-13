import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Puff } from 'react-loader-spinner';

function Loading() {
  return (
    <div className="flex justify-center items-center ">
      <Puff color="#00BFFF" height={550} width={80} />
    </div>
  );
}

export default Loading;
