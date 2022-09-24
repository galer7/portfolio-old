import Layout from "@/components/Layout";
import RoundedCard from "@/components/RoundedCard";
import { NextPage } from "next";
import Image from "next/image";

const Redesign: NextPage = () => {
  return (
    <div>
      <Layout>
        <RoundedCard>
          <div className="flex items-center justify-center w-full">
            <div className="flex-col justify-center items-center mx-auto">
              <Image
                src="/pfp.webp"
                alt="A photo of me 😄"
                width={128}
                height={128}
                className="rounded-full"
              />
              <div className="">Gabriel Galer</div>
            </div>
            <div className="flex">
              <div>Software Engineer</div>
            </div>
          </div>
        </RoundedCard>
      </Layout>
    </div>
  );
};

export default Redesign;
