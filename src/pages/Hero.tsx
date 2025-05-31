// import Image from "next/image";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="hero">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Image Section */}
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <Image
                alt="Headshot of sudarshan"
                src="/Lakshminarasa.photo.jpeg"
                width={1067}
                height={1067}
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
                Hi, I&apos;m Lakshminarasa V
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className=" text-base text-gray-600">
                I&apos;m a full-stack developer (React.js & Node.js,Next.js) with a
                focus on creating (and occasionally designing) exceptional
                digital experiences that are fast, accessible, visually
                appealing, and responsive. Even though I have been creating web
                applications for over 1 years, I still love it as if it was
                something new.
              </p>
            </div>

            {/* Location & Availability */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
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
                  className="stroke-gray-600"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className=" text-base text-gray-600">Karnataka, India</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p className="text-base text-gray-600">
                  Available for new projects
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-1">
            <a href="https://github.com/NarasaNarayan" target="_blank" style={{textDecoration: 'none'}}>
              <button className="flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 10c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4"></path>
                </svg>
              </button>
              </a>
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
