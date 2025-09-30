import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationBar from "./NavigationBar";
import { basePath } from '../../../next.config';

export default function Header() {
  return (
    <header className="sticky top-0 bg-opacity-0 border-b-2 border-gray-600 bg-gray-100 shadow-lg flex items-center justify-between w-full">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image src={`${basePath}/images/logos/logo_JNP_100_200.gif`} alt="Jardin Pibrac logo" className="h-10 w-auto px-6" width={200} height={100}/>
        </Link>
        <LocaleSwitcher />
      </div>
      <NavigationBar />
    </header>
  );
}