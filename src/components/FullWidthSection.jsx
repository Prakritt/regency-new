import React from "react";

function FullWidthSection({
  title,
  subtitle,
  img,
  desc,
  reverse = false,
}) {
  return (
    <article className="w-full py-5 sm:py-6">
      <div
        className={`mx-4 grid max-w-7xl gap-8 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:mx-6 sm:p-6 lg:mx-auto lg:grid-cols-2 lg:items-center lg:p-8 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        {img && (
          <div>
            <img
              src={img}
              alt={title}
              className="aspect-[16/10] w-full rounded-lg object-cover"
            />
          </div>
        )}

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
            Travel Service
          </p>

          {title && (
            <h3 className="mb-3 text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mb-5 text-base font-medium leading-7 text-gray-600">
              {subtitle}
            </p>
          )}

          <div className="text-base leading-7 text-gray-700 [&_strong]:font-semibold [&_strong]:text-gray-950">
            {desc}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FullWidthSection;
