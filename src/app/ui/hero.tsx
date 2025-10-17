'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
        w-full h-dvh bg-cover bg-center bg-no-repeat bg-fixed
        text-center p-8 items-center justify-center flex flex-col`
      }
      style={{ backgroundImage: `url(images/hero/Intro${count}.jpg)` }}
    >
      <div className="flex flex-row gap-8 justify-center items-center">
        <button className="bg-transparent border-none p-0">
          <Image src="images/logos/logo_JNP_180_300.gif" alt="logo jardin nature Pibrac" className="w-96 h-96 object-contain" width={300} height={180}/>
        </button>
        <Link
          className="bg-transparent border-none p-0"
          href="https://jardinnaturepibrac.org/Service%20Civique.htm"
          target="_blank"
        >
          <Image src="images/hero/hero.jpg" alt="lien to service civique" className="w-96 h-96 object-contain" width={200} height={200}/>
        </Link>
      </div>
    </section>
  );
}