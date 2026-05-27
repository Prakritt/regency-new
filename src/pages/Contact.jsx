import React, { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import CustomTourCallout from "../components/CustomTourCallout";

const contactCards = [
  {
    icon: PhoneIcon,
    label: "Call our office",
    value: "01-4528818, 01-4533455",
    href: "tel:+977014528818",
    action: "Call now",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    label: "WhatsApp support",
    value: "+977 9767652930",
    href: "https://wa.me/9779767652930",
    action: "Chat now",
    external: true,
  },
  {
    icon: EnvelopeIcon,
    label: "Email enquiries",
    value: "regencyprashant@gmail.com",
    href: "mailto:regencyprashant@gmail.com",
    action: "Email us",
  },
  {
    icon: MapPinIcon,
    label: "Visit us",
    value: "Hattisar, Kathmandu, Nepal",
    href: "https://www.google.com/maps/search/?api=1&query=Hattisar%2C%20Kathmandu%2C%20Nepal",
    action: "Open map",
    external: true,
  },
];

const supportNumbers = [
  { label: "24-hour service", value: "+977 9840069409", href: "tel:+9779840069409" },
  { label: "Office line", value: "+977 01-4512622", href: "tel:+977014512622" },
  { label: "Office line", value: "+977 01-4580845", href: "tel:+977014580845" },
];

const whatsappNumbers = [
  { value: "+977 9767652930", href: "https://wa.me/9779767652930" },
  { value: "+977 9767652933", href: "https://wa.me/9779767652933" },
  { value: "+977 9767652934", href: "https://wa.me/9779767652934" },
];

const initialFormState = {
  name: "",
  contact: "",
  destination: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormState);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Travel enquiry from ${formData.name || "Regency Nepal website"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Phone / WhatsApp: ${formData.contact}`,
        `Interested destination: ${formData.destination}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:regencyprashant@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white">
      <section className="border-b border-emerald-900 bg-emerald-950 py-12 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Regency Nepal Travels And Tours
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let us help plan your next journey
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg sm:leading-8">
              Reach our Kathmandu team for flights, Nepal tours, international
              itineraries, ticketing support, and 24-hour travel assistance.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-emerald-900">
                <ClockIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-100">
                  24-hour service
                </p>
                <a
                  href="tel:+9779840069409"
                  className="mt-2 block text-2xl font-bold text-white transition hover:text-emerald-100"
                >
                  +977 9840069409
                </a>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  Urgent travel support, ticketing help, and trip coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {contactCards.map(({ icon: Icon, label, value, href, action, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
            >
              <Icon
                className="h-7 w-7 text-green-700 transition group-hover:text-green-600"
                aria-hidden="true"
              />
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
                {label}
              </p>
              <p className="mt-2 break-words text-base font-bold leading-6 text-gray-950">
                {value}
              </p>
              <p className="mt-4 text-sm font-semibold text-green-700">
                {action}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
                Office details
              </p>
              <h2 className="text-2xl font-bold leading-tight text-gray-950">
                Hattisar, Kathmandu
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-700">
                IATA accredited travel support for ticketing, tours, car rental,
                helicopter charter, cruise planning, and rail booking.
              </p>
            </div>

            <CustomTourCallout compact />

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-700">
                Phone numbers
              </p>
              <div className="space-y-3">
                {supportNumbers.map((item) => (
                  <a
                    key={`${item.label}-${item.value}`}
                    href={item.href}
                    className="flex items-center justify-between gap-4 rounded-lg border border-zinc-100 px-4 py-3 transition hover:border-green-200 hover:bg-green-50"
                  >
                    <span className="text-sm font-medium text-gray-600">
                      {item.label}
                    </span>
                    <span className="text-right text-sm font-semibold text-gray-950">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-green-700">
                WhatsApp
              </p>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {whatsappNumbers.map((item) => (
                  <a
                    key={item.value}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-100"
                  >
                    {item.value}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-6 lg:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
              Travel enquiry
            </p>
            <h2 className="text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
              Share your travel plan
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Tell us where you would like to go, and our team will follow up
              with the right travel support.
            </p>

            <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-gray-800">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-gray-800">
                    Phone or WhatsApp
                  </span>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={updateField}
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-gray-800">
                  Interested destination
                </span>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={updateField}
                  placeholder="Annapurna, Mustang, Europe, Japan, anywhere..."
                  className="mt-2 w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-800">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  required
                  rows={5}
                  placeholder="Tell us your dates, number of travelers, budget range, travel style, and must-see places."
                  className="mt-2 w-full resize-none rounded-lg border border-zinc-200 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
                Send enquiry
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;
