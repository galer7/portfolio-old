import type { NextPage } from "next";
import Image from "next/image";

const AboutPage: NextPage = () => {
  return (
    <div>
      <Image
        src="/pfp.webp"
        alt="Me"
        width={200}
        height={200}
        style={{ borderRadius: "50%" }}
      />
      <h2 style={{ alignSelf: "center" }}>{"That's me!"}</h2>
    </div>
  );
};

export default AboutPage;
