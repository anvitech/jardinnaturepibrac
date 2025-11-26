'use client';

import Image from "next/image";
import { ArticleType, ImageType } from "@/interfaces/sections";

const Article = ({article}:{article: ArticleType}) => {
  const content = article.content;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="mb-6 border-t border-gray-200 pt-6">
      <h2 id={article.name} className="text-2xl text-center mb-2">{article.title}</h2>
      <div className="flex flex-col xl:flex-row items-start gap-6 justify-center">
        <div className="text-justify xl:max-w-xl">
          <audio controls className="w-full mb-4">
            <source src={`${basePath}${article.audio?.src}`} type="audio/mpeg" />
            <track
              kind="captions"
              src={`${basePath}${article.audio?.captions?.src ?? ''}`}
              srcLang={article.audio?.captions?.lang ?? 'en'}
              label={article.audio?.captions?.label ?? 'captions'}
              default={!!article.audio?.captions?.src}
            />
            Your browser does not support the audio element.
          </audio>
          {content && Object.entries(content).map(([key, value]) => (
            <p key={key}>{value}</p>
          ))}
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-center xl:justify-end">
          {article.images?.map((image: ImageType) => (
            <Image
              key={image.alt}
              src={`${basePath}${image.src}`}
              alt={image.alt}
              width={210}
              height={210}
              className="object-top object-cover rounded-md border border-gray-300 h-[210px] w-[210px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Article;