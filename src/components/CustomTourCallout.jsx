import {
  CalendarDaysIcon,
  GlobeAltIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const requestDetails = [
  {
    icon: GlobeAltIcon,
    label: "Destination",
    text: "Any country, region, pilgrimage route, island, city, or special route.",
  },
  {
    icon: CalendarDaysIcon,
    label: "Dates",
    text: "Preferred travel month, trip length, and how flexible your schedule is.",
  },
  {
    icon: UserGroupIcon,
    label: "Travel style",
    text: "Family, honeymoon, business, student group, senior-friendly, luxury, or adventure.",
  },
  {
    icon: SparklesIcon,
    label: "Interests",
    text: "Culture, nature, food, shopping, festivals, pilgrimage, rail, cruise, or trekking.",
  },
];

const toneStyles = {
  dark: {
    wrapper: "text-white",
    eyebrow: "text-emerald-200",
    title: "text-white",
    body: "text-zinc-200",
    item: "border-white/10 bg-white/10",
    icon: "bg-emerald-400/15 text-emerald-200",
    label: "text-white",
    text: "text-zinc-200",
  },
  light: {
    wrapper: "text-zinc-950",
    eyebrow: "text-green-700",
    title: "text-zinc-950",
    body: "text-zinc-700",
    item: "border-zinc-200 bg-zinc-50",
    icon: "bg-green-50 text-green-700",
    label: "text-zinc-950",
    text: "text-zinc-600",
  },
};

function CustomTourCallout({
  compact = false,
  tone = "light",
  className = "",
}) {
  const styles = toneStyles[tone] || toneStyles.light;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div
        className={`grid gap-8 ${
          compact ? "" : "lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        }`}
      >
        <div>
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-wide ${styles.eyebrow}`}
          >
            Tailor-made travel
          </p>
          <h2
            className={`font-bold leading-tight ${styles.title} ${
              compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
            }`}
          >
            Curated tours anywhere in the world
          </h2>
          <p className={`mt-4 text-base leading-7 ${styles.body}`}>
            If the exact destination is not listed, our team can create a
            custom itinerary around your dates, budget, pace, and travel
            interests.
          </p>
        </div>

        <div
          className={`grid gap-3 ${
            compact ? "sm:grid-cols-2 lg:grid-cols-1" : "sm:grid-cols-2"
          }`}
        >
          {requestDetails.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className={`rounded-lg border p-4 ${styles.item}`}
            >
              <div
                className={`mb-4 grid h-10 w-10 place-items-center rounded-lg ${styles.icon}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className={`text-sm font-bold ${styles.label}`}>{label}</p>
              <p className={`mt-2 text-sm leading-6 ${styles.text}`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomTourCallout;
