import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from "@/app/ui/PageLayout";
import BiodversityPathSection from '@/app/ui/sections/BiodiversityPathSection';
import getData from '@/app/hooks/getData';

export default function BiodiversityPathPage({params}: Readonly<PageProps<'/[locale]/biodiversity_path'>>) {
  const { locale } = use(params);
  console.log('Page locale: ', locale)

  const content = use(getData('agenda'));
  console.log("Page content: ", content);
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <BiodversityPathSection />
    </PageLayout>
  )
}