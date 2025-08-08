export default function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 md:p-16 rounded-lg max-w-5xl mx-auto gap-8">
      {/* Left side: Text */}
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-4">
          “Curating the best experience”
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          “Jennifer Roy has extensive firsthand knowledge of the destinations,
          resorts and amenities, which makes placing our trust in her so much
          easier! She seriously makes travel enjoyable. You tell her what you
          are looking for and she knows exactly where to put you. It's about
          curating the best experience so you will be a forever client. We have
          used her services for at least 5 trips and I will never return to the
          stress of booking our adventures again!”
        </p>

        <p className="text-gray-900 font-handwriting text-xl md:text-2xl mb-1">
          — Anniversary Trip Traveler
        </p>

        <p className="uppercase text-sm text-gray-500 tracking-wide">
          Playa Mujeres, Mexico
        </p>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/3">
        <div className="w-64 h-64 rounded-[50%_50%_50%_0] border-2 border-teal-300 overflow-hidden shadow-lg mx-auto">
          <img
            src="/path-to-your-image.jpg"
            alt="Playa Mujeres, Mexico"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
