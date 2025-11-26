import Image from "next/image";
import { PosterType } from "@/interfaces/sections";

interface PostersSectionProps {
  posters: PosterType[];
  title: string;
}

export default function PostersSection({
  posters, title
}: Readonly<PostersSectionProps>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section className="my-32">
      <h1 className="text-center text-green-700 text-3xl font-bold mb-8">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {posters.map((poster) => (
          <div
            key={poster.alt}
            className={`
              overflow-hidden border-gray-400 border-1 shadow-lg
              relative w-[210px] h-[297px]
            `}
          >
            <Image
              src={basePath + poster.image}
              alt={poster.alt}
              fill={true}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}