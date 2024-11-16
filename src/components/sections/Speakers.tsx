import Speaker from "../Speaker";
import WavyText from "../WavyText";

const speakers = [
  {
    imgSrc: "/assets/cpugad-logo.svg",
    name: "Maria Ariessa Ko",
  },
  {
    imgSrc: "/assets/cpugad-logo.svg",
    name: "Albion Tanong",
  },
  {
    imgSrc: "/assets/cpugad-logo.svg",
    name: "Halowfall Staff",
  },
];

export default function Speakers() {
  return (
    <div
      id="speakers"
      className="bg-sky flex flex-col items-center justify-center py-12 px-12 md:px-28 lg:px-52 xl:px-60 gap-4"
    >
      <WavyText
        text={"Speakers"}
        className="text-white text-4xl font-medium bg-foreground p-4 rounded-full"
      />
      <div className="flex flex-col gap-0"></div>
      {speakers.map(({ imgSrc, name }, index) => (
        <Speaker
          key={index}
          imgSrc={imgSrc}
          name={name}
          reverse={(index + 1) % 2 === 0}
        />
      ))}
    </div>
  );
}
