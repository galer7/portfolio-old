import NextImage from "next/image";
import Link from "next/link";

export default function Image({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={`relative w-full h-96`}>
      <Link href={src}>
        <a target="_blank">
          <NextImage src={src} layout="fill" objectFit="contain" alt={alt} />
        </a>
      </Link>
    </div>
  );
}
