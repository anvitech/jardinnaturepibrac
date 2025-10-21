'use client';

import ButtonImage from "@/app/ui/ButtonImage";
import { ImageType } from "@/interfaces/sections";

export default function ImageSection({images}: Readonly<{images: ImageType[]}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div
      id="biodiversity_path-image_section"
      className="flex flex-wrap grap-4 justify-center items-center mt-6 mb-12"
    >
      {images?.map(image => (
        <ButtonImage
          key={image.alt}
          href={image.href as string}
          src={`${basePath}${image.src}`}
          alt={image.alt}
          height={150}
          width={150}
          className="object-top object-cover rounded-md border-2 border-gray-700 m-2"
        />
      ))}
    </div>
  );
}