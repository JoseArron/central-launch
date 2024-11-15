import Circle from "../Circle";
import Track from "../Track";

export default function About() {
  return (
    <div
      id="about"
      className="bg-white flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-24 xl:px-36 gap-20 z-10"
    >
      <div>
        <h1>About</h1>
        <h3 className="w-1/2">
          A two-day immersive experience for Centralian students to ideate,
          develop, and pitch startup ideas.
        </h3>
      </div>
      <div className="relative">
        <h1 className="text-center py-5">What&apos;s in it for you?</h1>
        <div className="relative">
          <Circle className="justify-center w-72 h-72 px-10">
            <h3>
              Chance to represent CPU for an international startup conference
            </h3>
            <Circle className="absolute w-24 h-24 -left-28">
              <p>Food</p>
            </Circle>
            <Circle className="absolute -left-16 bottom-0">
              <p>Pitching</p>
            </Circle>
            <Circle className="absolute -left-2 -bottom-40 w-36 h-36">
              <p>Connections and Networks</p>
            </Circle>
            <Circle className="absolute -right-10 -bottom-36 w-36 h-36">
              <p>Connections and Networks</p>
            </Circle>
            <Circle className="absolute -right-24 bottom-5 w-24 h-24">
              <p>Workshops</p>
            </Circle>
            <Circle className="absolute -right-24 top-5">
              <p>Swag</p>
            </Circle>
          </Circle>
        </div>
      </div>
      <div className="pt-40 flex flex-col text-center gap-4 w-full sm:px-10 md:px-16 lg:px-28 max-w-screen-xl">
        <h2>Tracks</h2>
        <div className="grid grid-cols-2 gap-8">
          <Track title="Track 1" description="Description 1" />
          <Track title="Track 2" description="Description 2" />
          <Track title="Track 3" description="Description 3" />
          <Track title="Track 4" description="Description 4" />
        </div>
      </div>
    </div>
  );
}
