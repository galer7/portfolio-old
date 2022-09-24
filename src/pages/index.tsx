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
          <div className="flex justify-around w-full h-full text-black gap-8">
            <div className="flex items-center justify-center">
              <div className="flex flex-col justify-center items-center h-full font-yeseva gap-4 text-2xl text-center ml-8">
                <Image
                  src="/pfp.webp"
                  alt="A photo of me 😄"
                  width={128}
                  height={128}
                  className="rounded-full"
                />
                <div>
                  <h1>Gabriel Galer</h1>
                  <h3 className="italic font-serif">Software Engineer</h3>
                </div>
              </div>
            </div>
            {/* About Div */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <div className="text-center">
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
                <div className="flex justify-center  h-full gap-6">
                  <div>
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
                  <div>
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
              </div>
            </div>
          </div>
        </GlassmorphismCard>
      </Layout>
    </>
  );
};

export default Redesign;
