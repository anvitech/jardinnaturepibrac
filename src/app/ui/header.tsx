import NavigationBar from "./navigation_bar";

export default function Header() {
  return (
    <header className="absolute top-0 bg-opacity-0 row-start-1 flex items-center justify-between w-full bg-opacity-0">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img src="images/logos/logo_JNP_100_200.gif" alt="" className="h-10 w-auto px-6" />
        </a>
      </div>
      <NavigationBar />
    </header>
  );
}