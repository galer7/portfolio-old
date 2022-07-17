import type { NextPage } from "next";
import TopBar from "@/components/reddit/TopBar";

const Home: NextPage = () => {
  return (
    <>
      <TopBar />
      <div className="flex justify-around gap-2 m-4">
        <div className="flex-grow-[4] flex-col">
          <div>Create post</div>
          <div className="flex justify-start gap-2">
            <div>Best</div>
            <div>Hot</div>
            <div>New</div>
            <div>Top</div>
            <div>...</div>
            <div className="ml-auto">View options</div>
          </div>
        </div>
        <div className="flex-grow-1 flex-row">
          <div>Communities Near You</div>
          <div>r/Romania</div>
          <div>r/CoronavirusRO</div>
          <div>r/CoronavirusRomania</div>
        </div>
      </div>
    </>
  );
};

export default Home;
