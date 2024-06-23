import React from "react";
import { CarouselDefault } from "../components/CarouselDefault";
import SectionHeading from "../components/SectionHeading";

function Cultural({ data }) {
  console.log(data);
  return (
    <div className="">
      <div className="bg-gray-50 py-[3rem]">
        <SectionHeading title={`${data.title_main}`} />
        <div className="flex flex-col items-center px-[4rem] md:flex-row md:items-center gap-4 max-w-screen-lg mx-auto md:p-4">
          <div className="w-[20rem] h-[20rem] md:w-[40rem] md:h-[30rem] ">
            <CarouselDefault />
          </div>
          <div className="flex-1 min-w-[15rem]">
            <p className="text-justify tracking-wide  text-base">
              {data.description}
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        {data.destinations.map((place) => (
          <div key={place.id}> {place.name}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Cultural;
