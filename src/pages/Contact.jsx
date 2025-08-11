import React from "react";

function Contact() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Contact Us - Regency Nepal Travels
      </h2>
      <p className="mb-6">
        We’re here to help you plan your perfect trip. Reach us through any of
        the options below:
      </p>

      {/* Telephone Numbers */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Telephone</h3>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="tel:+977014512622"
              className="text-blue-600 hover:underline"
            >
              +977-01-4512622 (Telephone 1)
            </a>
          </li>
          <li>
            <a
              href="tel:+977014528818"
              className="text-blue-600 hover:underline"
            >
              +977-01-4528818 (Telephone 2)
            </a>
          </li>
          <li>
            <a
              href="tel:+977044533455"
              className="text-blue-600 hover:underline"
            >
              +977-04-4533455 (Telephone 3)
            </a>
          </li>
          <li>
            <a
              href="tel:+977014580845"
              className="text-blue-600 hover:underline"
            >
              +977-01-4580845 (Telephone 4)
            </a>
          </li>
        </ul>
      </div>

      {/* 24-Hour Service */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">24-Hour Customer Service</h3>
        <p>
          For assistance anytime, day or night, please contact our dedicated
          24-hour service line:
        </p>
        <p className="font-semibold mt-2">
          <a
            href="tel:+9779840069409"
            className="text-blue-600 hover:underline"
          >
            +977-9840069409
          </a>
        </p>
      </div>

      {/* Email */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Email</h3>
        <p>
          <a
            href="mailto:your-email@example.com"
            className="text-blue-600 hover:underline"
          >
            regencyprashant@gmail.com
          </a>
        </p>
      </div>

      {/* WhatsApp Numbers */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg">WhatsApp</h3>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://wa.me/9779767652930"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +9779767652930
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9779767652933"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +9779767652933
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9779767652934"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              +9779767652934
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
