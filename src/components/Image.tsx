import NextImage from "next/image";
import Link from "next/link";

export default function ({ src, h }: { src: string; h: string }) {
  return (
    <Link href={src}>
      <a target="_blank">
        <div className={`${h} relative`}>
          <NextImage src={src} layout="fill" objectFit="contain" />
        </div>
      </a>
    </Link>
  );
}
