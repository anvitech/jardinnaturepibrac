'use client';

import Article from "./Article";
import { ArticleType } from "@/interfaces/sections";

export default function Articles({articles}: Readonly<{articles: ArticleType[]}>) {
  return (
    <div id="biodiversity_path-articles" className="flex flex-col gap-6 mb-6 px-6">
      {articles?.map((article:ArticleType) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}
