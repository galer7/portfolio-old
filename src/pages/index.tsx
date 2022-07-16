import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="relative flex flex-col items-center w-full h-full text-center">
      <div className="mt-8 mb-4">
        <Image
          src="/pfp.webp"
          alt="Me"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h1>Gabriel Galer</h1>
      <h4>I build scalable systems using Node.js</h4>
      <h1 className="mt-10">Socials</h1>
      <ul>
        <li>Twitter</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
      </ul>
    </main>
  );
};

export default Home;
