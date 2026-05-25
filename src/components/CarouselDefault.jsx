import { Carousel } from "@material-tailwind/react";

export function CarouselDefault({ images }) {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, index) => (
        <img
          key={image}
          src={`/images/tours/${image}`}
          alt={`Tour slide ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}
