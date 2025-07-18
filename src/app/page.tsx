import Header from "@/app/ui/header";
import HeroSection from "./ui/hero";
import Footer from "./ui/footer";

export default function Home() {
  return (
    <div className="container max-w-full flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <HeroSection  />
      </main>
      <Footer />
    </div>
  );
}
