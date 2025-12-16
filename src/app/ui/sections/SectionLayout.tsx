export default function SectionLayout({
  children,
  wfull = false,
}: Readonly<{children: React.ReactNode, wfull?: boolean}>) {
  return <div className={`my-12 px-8 ${wfull ? 'max-w-full' : 'max-w-full lg:max-w-6xl'}`}>{children}</div>;
}