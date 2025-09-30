import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from "@/app/ui/PageLayout";
import BiodversityPathSection from '@/app/ui/sections/BiodiversityPathSection';

export default function BiodiversityPathPage({params}: Readonly<PageProps<'/[locale]/biodiversity_path'>>) {
  const {locale} = use(params);
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <BiodversityPathSection />
    </PageLayout>
  )
}