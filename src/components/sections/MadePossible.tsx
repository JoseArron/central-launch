import Helpers from "../Helpers";

const organizers = [
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
  {
    logoSrc: "",
    title: "Sample Organizer",
  },
];

const sponsors = [
  {
    logoSrc: "",
    title: "Sample Sponsor",
  },

  {
    logoSrc: "",
    title: "Sample Sponsor",
  },
  {
    logoSrc: "",
    title: "Sample Sponsor",
  },
];

const partners = [
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },
  {
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },{
    logoSrc: "",
    title: "Sample Partner",
  },
];

export default function MadePossible() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-12 lg:px-52 gap-14">
      <div className="w-full space-y-2">
        <h1 className="text-center">Organizers</h1>
        <div className="grid lg:grid-cols-3 w-full gap-10 grid-cols-2">
          {organizers.map(({ logoSrc, title }, idx) => (
            <Helpers logosrc={logoSrc} title={title} key={idx} />
          ))}
        </div>
      </div>
      <div className="w-full space-y-2">
        <h1 className="text-center">Sponsors</h1>
        <div className="grid lg:grid-cols-3 w-full gap-10 grid-cols-2">
          {sponsors.map(({ logoSrc, title }, idx) => (
            <Helpers logosrc={logoSrc} title={title} key={idx} />
          ))}
        </div>
      </div>
      <div className="w-full space-y-2">
        <h1 className="text-center">Partners</h1>
        <div className="grid lg:grid-cols-3 w-full gap-10 grid-cols-2">
          {partners.map(({ logoSrc, title }, idx) => (
            <Helpers logosrc={logoSrc} title={title} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
