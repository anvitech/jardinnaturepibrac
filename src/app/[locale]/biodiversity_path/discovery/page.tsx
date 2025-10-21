'use client';

import ImageSection from '@/app/ui/sections/ImageSection';
import Articles from '@/app/ui/Articles';
import { ArticleType } from '@/interfaces/sections';

import { useLocale } from 'next-intl';
import { usePageData } from '@/app/hooks/use-data';


export default function DiscoveryPage() {
  const locale = useLocale();
  const { data, error } = usePageData('biodiversity_path', locale);
  if (error) { return <div>{'Failed to load articles'}</div> }

  // Extract data
  const sectionData = data?.sections?.discovery as { articles: ArticleType[] };
  if (!sectionData) { return <div>{'Failed to load articles'}</div> }

  // Get all thumbnails for the section
  const thumbnails = sectionData?.articles?.map((article: ArticleType) => {
    article.thumbnail.href = `/biodiversity_path/discovery/#${article.name}`;
    return article.thumbnail
  });

  // Get all articles for the section
  const articles = sectionData?.articles;

  return (
    <div id="biodiversity_path-discovery-page" className='max-w-3xl md:max-w-6xl'>
      <ImageSection images={thumbnails} />
      <Articles articles={articles} />
    </div>
  );
}
