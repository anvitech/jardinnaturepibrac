import { SectionsType } from "@/interfaces/sections";
import { basePath, host } from '@/../next.config';

export const revalidate = 60;

export default async function getData(page: string): Promise<SectionsType> {
  const url = `${host}/${basePath}/data/pages/fr/${page}.json`;
  const res = await fetch(url);
  if (res.ok) {
    return res.json();
  } else {
    console.error("Cannot fetch data. Status:", res.status);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        "sections": {
          "current_season": {
            "cards": []
          }
        }
      });
    }, 300);
  });
}
