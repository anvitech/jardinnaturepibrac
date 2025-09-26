import Image from "next/image";
import Link from "next/link";
import { basePath } from '../../../next.config';

type ButtonImageProps = {
  href: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function ButtonImage({
  href, 
  src, 
  alt,
  width = 200,
  height = 64,
  className,
}: Readonly<ButtonImageProps>) {
  const img_classname = `max-h-full justify-center ${className || ''}`;
  return (
    <Link href={href} className="p-0 border-0 bg-transparent cursor-pointer justify-center flex">
      <Image src={`${basePath}${src}`} alt={alt} className={img_classname} width={width} height={height}/>
    </Link>
  );
}
