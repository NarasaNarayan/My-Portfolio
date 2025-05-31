"use client";

import React, { useState } from "react";

const Contact = () => {
  const email = "narasa201754@gmail.com";
  const phone = "+91 6380673093";
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedText(id);
        setTimeout(() => setCopiedText(""), 3000); // Clear the copied text after 3 seconds
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
      });
  };
  

  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="Contact">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-700">Get in touch</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-900">
            What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5 [&_svg]:stroke-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 md:h-8 md:w-8"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                {email}
              </h2>
              <button
                id="copy-email"
                onClick={() => copyToClipboard(email, "copy-email")}
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy w-8 h-8"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                {copiedText === "copy-email" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
            <div className="flex items-center gap-4 md:gap-5 [&_svg]:stroke-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 md:h-8 md:w-8"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                {phone}
              </h2>
              <button
                id="copy-phone"
                onClick={() => copyToClipboard(phone, "copy-phone")}
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy w-8 h-8"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                {copiedText === "copy-phone" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-normal text-base text-center text-gray-900">
              You may also find me on these platforms!
            </p>
            <div className="flex gap-1">
              {/* Social Media Buttons without Tooltip */}
              <a href="https://github.com/NarasaNarayan" target="_blank" style={{textDecoration: 'none'}}>
              <button className="flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 10c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path>
                </svg>
              </button>
              </a>
             
              {/* Add more social media buttons as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
