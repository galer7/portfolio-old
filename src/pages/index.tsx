import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <div>Portofolio - Gabriel Galer</div>
      <Image
        src="/pfp.webp"
        alt="Me"
        width={200}
        height={200}
        style={{ borderRadius: "50%" }}
      />
      <h2 style={{ alignSelf: "center" }}>{"That's me!"}</h2>
      <h3>
        Backend Dev @{" "}
        <a href="https://www.instagram.com/explorado.ro/">Explorado</a>
      </h3>
      <p className="text-green-800">Tailwind is awsome!</p>
      <div className="grid grid-cols-3">
        <div>grid-element-1</div>
        <div>grid-element-2</div>
        <div>grid-element-3</div>
      </div>

      <div className="flex">
        <div>grid-element-1</div>
        <div>grid-element-2</div>
        <div>grid-element-3</div>
      </div>
    </div>
  );
};

export default Home;
