import React from "react";

function FullWidthSection({
  title,
  subtitle,
  img,
  desc,
  reverse = false,
}) {
  return (
    <article className="w-full py-4 sm:py-6">
      <div
        className={`mx-4 grid max-w-7xl gap-6 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm sm:mx-6 sm:gap-8 sm:p-6 lg:mx-auto lg:grid-cols-2 lg:items-center lg:p-8 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        {img && (
          <div>
            <img
              src={img}
              alt={title}
              className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[16/10]"
              loading="lazy"
              decoding="async"
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
            <p className="mb-4 text-sm font-medium leading-6 text-gray-600 sm:mb-5 sm:text-base sm:leading-7">
              {subtitle}
            </p>
          )}

          <div className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 [&_strong]:font-semibold [&_strong]:text-gray-950">
            {desc}
          </div>
        </div>
      </div>
    </article>
  );
}

export default FullWidthSection;
