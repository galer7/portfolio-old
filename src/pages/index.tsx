import HorizontalLine from "@/components/HorizontalLine";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa";

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

      <HorizontalLine />

      <h4>I build scalable systems using Node.js.</h4>
      <h4>
        I occasionally write{" "}
        <Link href={"/posts"}>
          <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            posts
          </a>
        </Link>{" "}
        about my latest projects.
      </h4>

      <HorizontalLine />

      <h1>Latest projects</h1>
      <ul className="w-1/4 list-disc list-inside">
        <li>
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank"
            rel="noreferrer"
            href="https://weat.galer7.com"
          >
            WEAT
          </a>
          . Collaborative layer on top of a food delivery service.{" "}
          <Link href={"/posts/weat"}>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              Read more...
            </a>
          </Link>
        </li>
      </ul>

      <HorizontalLine />

      <div className="flex justify-evenly w-1/4 gap-6">
        <div>
          <h1>Socials</h1>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/galer7"
              >
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
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="/gabriel-galer-resume.pdf"
              >
                <FaFilePdf className="inline mr-1 text-white" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
