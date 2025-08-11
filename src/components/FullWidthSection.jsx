import React from "react";

function FullWidthSection({ title, subtitle, img, desc }) {
  return (
    <section className={` w-full py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Card */}
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-10">
          {/* Image */}
          {img && (
            <div className="mb-6">
              <img
                src={img}
                alt={title}
                className="w-full rounded-md object-cover"
              />
            </div>
          )}

          {/* Title */}
          {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}

          {/* Subtitle */}
          {subtitle && (
            <h3 className="text-xl text-gray-600 mb-6">{subtitle}</h3>
          )}

          {/* Description */}
          <div className="text-gray-700 text-base">{desc}</div>
        </div>
      </div>
    </section>
  );
}

export default FullWidthSection;
