import NextImage from "next/image";
import Link from "next/link";

export default function Image({
  src,
  h,
  alt,
}: {
  src: string;
  h: string;
  alt: string;
}) {
  return (
    <div className={`ml-[calc(-50vw_+_50%)] relative w-screen ${h}`}>
      <Link href={src}>
        <a target="_blank">
          <NextImage src={src} layout="fill" objectFit="contain" alt={alt} />
        </a>
      </Link>
    </div>
  );
}
