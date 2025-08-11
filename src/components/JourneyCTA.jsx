import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function JourneyCTA() {
  return (
    <section className="w-full bg-green-600 border-t border-b border-green-700">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left text */}
        <div className="flex items-center space-x-2 md:space-x-4 text-center md:text-left">
          <span className="text-lg text-green-100 font-serif font-semibold">
            Ready to
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white border-b border-green-200 pb-1">
            Start Your Journey?
          </h2>
        </div>

        {/* Right call info */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0 text-green-50 font-medium">
          <span className="text-sm md:text-base">Call our office at:</span>
          <div className="flex items-center text-white font-semibold text-lg md:text-xl">
            <PhoneIcon className="w-5 h-5 mr-1" />
            <a href="tel:+9779840069409" className="hover:underline">
              (984) 006-9409
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
