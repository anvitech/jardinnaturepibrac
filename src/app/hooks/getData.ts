import { SectionsType } from "../../interfaces/sections";
import { basePath, host } from '../../../next.config';

/**
 * Fetch page content from local
 * @returns 
 */
export default async function getData(page: string): Promise<SectionsType> {
  const url = `${host}/${basePath}/data/pages/fr/${page}.json`;
  let data = {
    "sections": {
      "current_season": {
        "cards": []
      }
    }
  };
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (res.ok) {
    data = await res.json();
  } else {
    console.error(res.status);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}
