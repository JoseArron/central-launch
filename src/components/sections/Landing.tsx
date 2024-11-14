import Image from "next/image";

import Countdown from "../Countdown";

import branches from "../../app/images/branches.svg";
import nest from "../../app/images/nest.svg";
import leaves from "../../app/images/leaves.svg";
import cloud1 from "../../app/images/cloud-1.svg";
import cloud2 from "../../app/images/cloud-2.svg";
import sun from "../../app/images/sun.svg";
import bg1 from "../../app/images/bg-1.svg";
import bg2 from "../../app/images/bg-2.svg";

export default function Landing() {
  return (
    <div className="flex flex-row w-full h-screen py-8">
      <div className="flex flex-1 relative">
        <div className="absolute w-[200%] h-screen -z-20">
          <Image
            src={bg2}
            alt="bg2"
            className="absolute bottom-36 object-cover"
          />
          <Image
            src={bg1}
            alt="bg1"
            className="absolute bottom-0 object-cover"
          />
          <div className="flex justify-center h-full">
            <Image src={sun} alt="sun" className="absolute size-3/4 top-24" />
          </div>
        </div>

        <div className="absolute w-[200%] h-screen -z-10">
          <Image
            src={cloud1}
            alt="cloud1"
            className="absolute size-64 top-36 left-0"
          />
          <Image
            src={cloud2}
            alt="cloud2"
            className="absolute size-64 top-2/4 left-2/4"
          />
          <Image
            src={cloud1}
            alt="cloud1"
            className="absolute size-64 top-96 left-3/4"
          />
          <Image
            src={cloud2}
            alt="cloud2"
            className="absolute size-64 top-28 left-1/4"
          />
        </div>
        <div className="h-screen -z-10 top-1/2">
          <Image src={branches} alt="branches" className="absolute size-1/2 " />
          <Image src={nest} alt="nest" className="absolute size-1/2" />
          <Image src={leaves} alt="leaves" className="absolute size-1/2" />
        </div>
      </div>
      <div className="flex flex-1 flex-col text-center items-center justify-center gap-10">
        <div>
          <h1 className="sm:text-6xl md:text-7xl lg:text-8xl">
            Central Launch
          </h1>
          <h2>November 22 - 23, 2024</h2>
        </div>
        <div>
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl">Launching in</h2>
          <Countdown endTime={new Date("2024-11-22").getTime()} />
          <button className="text-neutral-950 bg-white p-4 font-bold rounded-md mt-2">
            Join the launch
          </button>
        </div>
      </div>
    </div>
  );
}
