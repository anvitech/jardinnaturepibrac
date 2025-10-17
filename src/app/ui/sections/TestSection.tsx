// app/page.tsx

'use client'

import { useTranslations } from 'next-intl'
import { useTestingData } from '@/app/hooks/use-data';

export default function TestSection() {
  const t = useTranslations('Activities');

  const { data, error } = useTestingData()

  if (error) return 'Failed to load'
  return (
    <div>
      {t('title')}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}