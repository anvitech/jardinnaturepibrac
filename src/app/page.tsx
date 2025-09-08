// import Header from "@/app/ui/Header";
// import HeroSection from "./ui/Hero";
// import Footer from "./ui/Footer";

// export default function Home() {
//   return (
//     <div className="container max-w-full flex flex-col">
//       <Header />
//       <main className="flex flex-col items-center justify-center">
//         <HeroSection  />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}
