import { useRouteError } from 'react-router';

const PageError = () => {
  const error = useRouteError();
  console.log(error);

  return <h1>there was an error...</h1>;
};

export default PageError;
