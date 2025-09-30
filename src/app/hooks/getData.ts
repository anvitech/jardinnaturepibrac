import { SectionsType } from "../../interfaces/sections";
import { basePath, host } from '../../../next.config';

/**
 * Fetch page content from local
 * @returns 
 */
export default async function getData(page: string): Promise<SectionsType> {
  const url = `${host}/${basePath}/data/pages/fr/${page}.json`;
  console.info("Fetching data from", url);
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
    console.info("Data fetched successfully: ", data);
  } else {
    console.error("Cannot fetch data. Status:", res.status);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}
