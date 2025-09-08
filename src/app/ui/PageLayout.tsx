import {ReactNode} from 'react';
import Header from './header';
import Footer from './footer';

type Props = {
  readonly children: ReactNode;
};

export default function PageLayout({children}: Props) {
  return (
    <div className="container max-w-full flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
