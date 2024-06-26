import { Carousel } from "@material-tailwind/react";
export function CarouselDefault({ images }) {
  return (
    <Carousel className="rounded-xl">
      <img
        src={`/images/tours/${images[0]}`}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={`/images/tours/${images[1]}`}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={`/images/tours/${images[2]}`}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
