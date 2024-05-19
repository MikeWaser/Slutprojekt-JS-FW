import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorComponent: React.FC = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error).message}</i>
      </p>
    </div>
  );
};

export default ErrorComponent;
