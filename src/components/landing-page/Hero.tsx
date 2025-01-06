import { Link } from 'react-router';
import HeroCarousel from './HeroCarousel';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-light sm:text-6xl">
          Stunning Home Décor Made Easy
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          unde labore. Pariatur molestiae ducimus minus sit possimus eveniet
          natus repellat.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
