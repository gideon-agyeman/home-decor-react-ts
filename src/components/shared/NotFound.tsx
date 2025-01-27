import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <p className="text-9xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg leading-7">
          sorry, we could not find the page you are looking for
        </p>
        <div className="mt-10">
          <Button asChild variant="secondary" size="lg">
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
