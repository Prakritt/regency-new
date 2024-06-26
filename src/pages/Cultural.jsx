import React from "react";
import { CarouselDefault } from "../components/CarouselDefault";
import SectionHeading from "../components/SectionHeading";
import { FaLocationDot } from "react-icons/fa6";
import CustomTimeline from "../UI/CustomTimeline";

function Cultural({ data }) {
  return (
    <div className="">
      <div className="bg-gray-50 py-[3rem]">
        <SectionHeading title={`${data.title_main}`} />
        <div className="flex flex-col items-center px-[4rem] md:flex-row md:items-center gap-4 max-w-screen-lg mx-auto md:p-4">
          <div className="w-[20rem] h-[20rem] md:w-[40rem] md:h-[30rem] ">
            <CarouselDefault images={data.cover} />
          </div>
          <div className="flex-1 min-w-[15rem]">
            <p className="text-justify tracking-wide  text-base">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-8 md:p-12 lg:p-20 ">
        <p className="mb-12">{data.summary}</p>
        {data.destinations.map((place) => (
          <div key={place.id} className="pb-5">
            <h3 className="ms-2 font-semibold">{place.name}</h3>

            <div className="flex flex-col md:flex-row gap-3 ">
              <div className="min-w-64 h-64 relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
                  src={`/images/tours/${place.image}`}
                  alt={`${place.name}`}
                />
              </div>
              <div className=" flex flex-col">
                <p className="text-justify">{place.description}</p>
                <div className="flex gap-3 items-center">
                  <FaLocationDot className="text-green-500 text-lg font-extrabold" />
                  <span>{place.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomTimeline itenary={data.itenary} />
    </div>
  );
}

export default Cultural;
