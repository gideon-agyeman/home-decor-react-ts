import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

import { carouselImages } from '@/utils';

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt="carousel image"
                  className="w-full h-[24rem] rounded-md object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {carouselImages.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
