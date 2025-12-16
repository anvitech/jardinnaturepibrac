import Image from "next/image";
import { Link } from "@/i18n/navigation";

type ButtonImageProps = {
  href: string;
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export default function ButtonImage({
  href,
  src,
  alt,
  fill,
  width = 200,
  height = 64,
  className,
}: Readonly<ButtonImageProps>) {
  const img_classname = `max-h-full justify-center ${className || ''}`;
  return (
    <Link href={href} className="p-0 border-0 bg-transparent cursor-pointer justify-center flex">
      {fill ?
      <Image src={`${src}`} alt={alt} className={img_classname} fill/>
      :
      <Image src={`${src}`} alt={alt} className={img_classname} width={width} height={height}/>
      }
    </Link>
  );
}
