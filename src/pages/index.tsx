import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <h3 className="italic">Software Engineer</h3>
      <hr className="border-t-2 border-t-slate-50 w-1/6 my-2"></hr>
      <h4>I build scalable systems using Node.js</h4>
      <h4>
        I also write{" "}
        <Link href={"/posts"}>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            posts
          </a>
        </Link>{" "}
        sometimes
      </h4>
      <h1 className="mt-6">Socials</h1>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/gabigaler7"
          >
            <FaTwitter className="inline mr-1" />
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/galer7">
            <FaGithub className="inline mr-1" />
            GitHub
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gabriel-galer-83098b163"
          >
            <FaLinkedin className="inline mr-1" />
            Linkedin
          </a>{" "}
        </li>
      </ul>
    </main>
  );
};

export default Home;
