import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";
import StyledNavLink from "./StyledNavLink";

function getShortText(text = "", maxLength = 140) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function getEyebrow(dest = "") {
  if (!dest) return "Featured Tour";
  if (dest === "Nepal") return "Internal Tour";
  if (dest.length <= 16) return dest;
  return "Curated Tour";
}

function StyledCard({ img, dest, desc, to = "", className = "" }) {
  const card = (
    <Card
      className={`group h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm
        transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl ${className}`}
      tabIndex={to ? undefined : 0}
      role="group"
    >
      <div className="relative aspect-[4/3] min-h-[11rem] overflow-hidden bg-gray-100 sm:aspect-[16/11] sm:min-h-[13rem]">
        <img
          src={img}
          alt={dest ? `${dest} tour` : "Travel tour"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-1 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 shadow-sm">
          <MapPinIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{getEyebrow(dest)}</span>
        </span>
      </div>

      <div className="flex min-h-[12.5rem] flex-1 flex-col p-4 sm:min-h-[15rem] sm:p-6">
        <Typography
          as="h3"
          variant="h5"
          color="blue-gray"
          className="mb-3 line-clamp-2 text-lg font-bold leading-snug sm:text-xl"
          title={dest}
        >
          {dest}
        </Typography>

        <Typography className="line-clamp-3 flex-1 text-sm leading-6 text-gray-600 sm:text-base">
          {getShortText(desc)}
        </Typography>

        <div className="mt-5 inline-flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-green-700 sm:mt-6">
          <span>View tour</span>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-green-50 text-green-700 transition group-hover:bg-green-600 group-hover:text-white">
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Card>
  );

  if (!to) return card;

  return (
    <StyledNavLink
      to={to}
      className="block h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      aria-label={`View ${dest}`}
    >
      {card}
    </StyledNavLink>
  );
}

export default StyledCard;
