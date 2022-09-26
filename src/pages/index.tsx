import Layout from "@/components/Layout";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaFilePdf } from "react-icons/fa";

const Redesign: NextPage = () => {
  return (
    <>
      <Layout>
        <GlassmorphismCard>
          <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-x-6 w-full h-full text-black">
            <div className="md:row-start-1 md:row-end-2 text-center self-end md:-mr-10">
              <Image
                src="/pfp.webp"
                alt="A photo of me 😄"
                objectFit="cover"
                height="100%"
                width="100%"
                className="rounded-full"
              />
            </div>

            <div className="md:row-start-2 md:row-end-3 text-center md:-mr-10">
              <h1 className="font-yeseva text-2xl">Gabriel Galer</h1>
              <h3 className="italic font-serif">Software Engineer</h3>
            </div>
            {/* About Div */}
            <div className="text-center md:col-start-2 md:col-end-4 md:self-end md:mb-2">
              <h1 className="font-yeseva">About</h1>

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
            </div>

            {/* Socials Div */}
            <div className="text-center md:place-self-end md:self-start">
              <h1 className="font-yeseva">Socials</h1>
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
            <div className="text-center md:place-self-start md:self-start">
              <h1 className="font-yeseva">Resources</h1>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="/gabriel-galer-resume.pdf"
                  >
                    <FaFilePdf className="inline mr-1" />
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </GlassmorphismCard>
      </Layout>
    </>
  );
};

export default Redesign;
