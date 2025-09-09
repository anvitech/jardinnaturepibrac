import Image from "next/image";
import Link from "next/link";
import { basePath } from '../../../next.config';

type ButtonImageProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function ButtonImage({
  href, 
  src, 
  alt,
  width = 200,
  height = 64,
}: Readonly<ButtonImageProps>) {
  const img_classname = `m-auto max-h-full justify-center`;
  return (
    <Link href={href} className="p-0 border-0 bg-transparent cursor-pointer justify-center flex">
      <Image src={`${basePath}${src}`} alt={alt} className={img_classname} width={width} height={height}/>
    </Link>
  );
}
