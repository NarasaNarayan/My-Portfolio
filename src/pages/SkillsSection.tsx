// src/components/SkillsSection.tsx
// import Image from 'next/image';
import React from 'react';

const SKILLS = [
  { name: 'Javascript', src: '/logo/icon-javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Typescript', src: '/logo/icon-typescript.svg', link: 'https://www.typescriptlang.org/' },
  { name: 'React', src: '/logo/icon-react.svg', link: 'https://react.dev/' },
  { name: 'Next.js', src: '/logo/icon-nextjs.svg', link: 'https://nextjs.org/' },
  { name: 'Node.js', src: '/logo/icon-nodejs.svg', link: 'https://nodejs.org/en' },
  { name: 'Express.js', src: '/logo/icon-express.svg', link: 'https://expressjs.com/' },
  { name: 'MongoDB', src: '/logo/icon-mongodb.svg', link: 'https://www.mongodb.com/' },
  { name: 'Photoshop', src: '/logo/photoshop1.png', link: 'https://www.photoshop.com/' },
  { name: 'Tailwindcss', src: '/logo/icon-tailwindcss.svg', link: 'https://tailwindcss.com/' },
  { name: 'Git', src: '/logo/icon-git.svg', link: 'https://git-scm.com/' },
  { name: 'Boostrap5', src: '/logo/boostrap5.jpg', link: 'https://boostrap.com/' },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium text-gray-900">Skills</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
                <img
                  alt={skill.name}
                  loading="lazy"
                  width={64} 
                  height={64}
                  className="transition-transform duration-300 md:hover:scale-110"
                  style={{aspectRatio:'1'}}
                  src={skill.src}
                />
              <p className="text-normal text-base md:text-lg text-gray-600">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
