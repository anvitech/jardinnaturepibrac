import { SectionsType } from "../../interfaces/sections";
import { basePath, host } from '../../../next.config';

/**
 * Fetch page content from local
 * @returns 
 */
export default async function getData(page: string): Promise<SectionsType> {
  return fetch(`${host}/${basePath}/data/pages/fr/${page}.json`).then(res => res.json());
}
