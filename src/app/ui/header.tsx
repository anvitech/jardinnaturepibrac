import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationBar from "./NavigationBar";

export default function Header() {
  return (
    <header className="fixed top-0 bg-opacity-0 border-b-4 border-gray-600 bg-gray-100 flex items-center justify-between w-full">
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image src="images/logos/logo_JNP_100_200.gif" alt="" className="h-10 w-auto px-6" width={200} height={100}/>
        </Link>
        <LocaleSwitcher />
      </div>
      <NavigationBar />
    </header>
  );
}