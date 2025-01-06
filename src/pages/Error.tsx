import { useRouteError, isRouteErrorResponse } from 'react-router';
import { NotFound } from '@/components';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error) && error.status === 404) return <NotFound />;

  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
