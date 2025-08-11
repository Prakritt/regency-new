export default function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:p-16 rounded-lg max-w-5xl mx-auto gap-8">
      {/* Left side: Text */}
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
          About Regency Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          At Regency Nepal Travels, we have built our reputation on delivering
          exceptional travel experiences across Nepal and around the globe. Our
          expertise spans every continent and every style of travel, from
          cultural journeys to luxury escapes. As we adapt to the ever-changing
          world of travel, we set ourselves apart with our commitment to
          convenience, professionalism, and personalized care — always staying
          true to our motto: Travel smart, travel with us.
        </p>

        {/* <p className="text-gray-900 font-handwriting text-xl md:text-2xl mb-1">
          — Anniversary Trip Traveler
        </p>

        <p className="uppercase text-sm text-gray-500 tracking-wide">
          Playa Mujeres, Mexico
        </p> */}
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/3">
        <div className="w-64 h-64 rounded-[50%_50%_50%_0] border-2 border-teal-300 overflow-hidden shadow-lg mx-auto">
          <img
            src="/images/tours/yosemite.jpg"
            alt="Playa Mujeres, Mexico"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
