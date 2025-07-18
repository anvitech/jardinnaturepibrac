'use client';

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevCount) => prevCount > 2 ? 1 : prevCount + 1);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section 
      className={`
        w-full h-dvh md:bg-[url(images/hero/Intro${count}.jpg)] bg-cover bg-center bg-no-repeat bg-fixed
        text-center p-8 items-center justify-center flex flex-col`
      }
    >
      <div className="flex flex-row gap-8 justify-center items-center">
        <button className="bg-transparent border-none p-0">
          <img src="images/logos/logo_JNP_180_300.gif" alt="logo jardin nature Pibrac" className="w-96 h-96 object-contain" />
        </button>
        <a 
          className="bg-transparent border-none p-0"
          href="https://jardinnaturepibrac.org/Service%20Civique.htm"
          target="_blank"
        >
          <img src="images/hero/rejoinez_nous_hero.jpg" alt="lien to service civique" className="w-96 h-96 object-contain" />
        </a>
      </div>
    </section>
  );
}