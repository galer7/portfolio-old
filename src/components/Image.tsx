import NextImage from "next/image";
import Link from "next/link";

export default function Image({ src, h }: { src: string; h: string }) {
  return (
    <div className="ml-[calc(-50vw_+_50%)] relative w-screen">
      <Link href={src}>
        <a target="_blank">
          <div className={h}>
            <NextImage src={src} layout="fill" objectFit="contain" />
          </div>
        </a>
      </Link>
    </div>
  );
}
