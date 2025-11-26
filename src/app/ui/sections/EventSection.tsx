import Image from 'next/image';
import GoogleMapCard from '@/app/ui/GoogleMapCard';

interface EventSectionData {
  title: string;
  subtitle: string;
  poster: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
  location?: {
    title: string;
  };
}

export default function EventSection({title, subtitle, poster, className, location}: Readonly<EventSectionData>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section className="flex flex-col items-center text-center mb-16 mt-8">
      <h2 className="text-green-700 text-3xl font-bold mb-6">{title}</h2>
      <h3 className="text-green-700 text-xl font-medium mb-6">{subtitle}</h3>

      <Image
        src={basePath + poster.src}
        width={poster.width}
        height={poster.height}
        alt={poster.alt}
        className={className || "md:w-sm"}
      />

      {location && <div className="md:w-3xl">
        <GoogleMapCard title={location.title} />
      </div>}
    </section>
  );
}