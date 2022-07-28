import type { NextPage } from "next";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
        <li>
          <FaTwitter className="inline" /> Twitter
        </li>
        <li>
          <FaGithub className="inline" /> GitHub
        </li>
        <li>
          <FaLinkedin className="inline" /> LinkedIn
        </li>
      </ul>

      <p class="details">
        Built with{" "}
        <a target="_blank" href="https://nextjs.org">
          React
        </a>{" "}
        on{" "}
        <a target="_blank" href="https://vercel.com">
          Vercel
        </a>
      </p>
    </main>
  );
};

export default Home;
