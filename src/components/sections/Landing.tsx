import Countdown from "../Countdown";

export default function Landing() {
  return (
    <div className="text-right flex flex-col py-8 px-4 md:px-12 lg:px-24 xl:px-36 gap-64">
      <div>
        <h1 className="sm:text-6xl md:text-7xl lg:text-8xl">
          Central Launch
        </h1>
        <h2>
          November 22 - 23, 2024
        </h2>
      </div>
      <div>
        <h2 className="sm:text-4xl md:text-5xl lg:text-6xl mb-2">
          Launching in
        </h2>
        <Countdown endTime={new Date('2024-11-22').getTime()}/>
        <button className="text-neutral-950 bg-white p-4 font-bold rounded-md mt-2">
          <h2>
            Join the launch
          </h2>
        </button>
      </div>
    </div>
  )
}
