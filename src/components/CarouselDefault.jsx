import { Carousel } from "@material-tailwind/react";
import img1 from "./../images/janakpur.jpg";
import img2 from "./../images/muktinath.jpg";
import img3 from "./../images/pashupatinath.jpg";
export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img src={img1} alt="image 1" className="h-full w-full object-cover" />
      <img src={img2} alt="image 2" className="h-full w-full object-cover" />
      <img src={img3} alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
