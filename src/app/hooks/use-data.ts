/**
 * Service that provides data for the app
 */
'use client';

import useSWR from 'swr'

import { ImageType, PageDataType } from "@/interfaces/sections";

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function useImages(): { data: { sharing_knowledge: ImageType[] } | undefined, error: string | undefined } {
  const url = `/data/images.json`;
  console.log("URL:", url);
  const { data, error } = useSWR(
    url,
    fetcher
  )

  return { data, error };
}

export function usePageData(page: string): { data: PageDataType | undefined, error: string | undefined } {
  const url = `/data/pages/fr/${page}.json`;
  const { data, error } = useSWR(url, fetcher);
  return { data, error }
}

export function useTestingData() {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/1`,
    fetcher
  )
  return { data, error }
}