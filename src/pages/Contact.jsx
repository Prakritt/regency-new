import React from "react";

function Contact() {
  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Contact Us
      </h2>
      <p className="mb-8 text-gray-600 text-center">
        We’re here to help you plan your perfect trip. Reach us anytime through
        the options below.
      </p>

      {/* Telephone Numbers */}
      <section className="mb-10">
        <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-700">
          📞 Telephone
        </h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>
            <a href="tel:+977014512622" className="hover:underline">
              +977-01-4512622
            </a>
          </li>
          <li>
            <a href="tel:+977014528818" className="hover:underline">
              +977-01-4528818
            </a>
          </li>
          <li>
            <a href="tel:+977044533455" className="hover:underline">
              +977-04-4533455
            </a>
          </li>
          <li>
            <a href="tel:+977014580845" className="hover:underline">
              +977-01-4580845
            </a>
          </li>
        </ul>
      </section>

      {/* 24-Hour Service */}
      <section className="mb-10">
        <h3 className="flex items-center text-xl font-semibold mb-3 text-gray-700">
          ⏰ 24-Hour Customer Service
        </h3>
        <p className="mb-2 text-gray-600">
          For assistance anytime, day or night, contact our dedicated service
          line:
        </p>
        <a
          href="tel:+9779840069409"
          className="text-blue-700 font-semibold hover:underline"
        >
          +977-9840069409
        </a>
      </section>

      {/* Email */}
      <section className="mb-10">
        <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-700">
          📧 Email
        </h3>
        <a
          href="mailto:regencyprashant@gmail.com"
          className="text-blue-700 hover:underline break-all"
        >
          regencyprashant@gmail.com
        </a>
      </section>

      {/* WhatsApp Numbers */}
      <section>
        <h3 className="flex items-center text-xl font-semibold mb-4 text-gray-700">
          💬 WhatsApp
        </h3>
        <ul className="list-disc list-inside space-y-2 text-green-700">
          <li>
            <a
              href="https://wa.me/9779767652930"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +9779767652930
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9779767652933"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +9779767652933
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9779767652934"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +9779767652934
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
