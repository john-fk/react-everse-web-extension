import React from 'react';
import { PuffLoader } from 'react-spinners';

function LoadingIcon() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <PuffLoader color="#fd2254" css="margin: 3em" />
    </div>
  );
}

export default LoadingIcon;
