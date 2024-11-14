import Header from "@/components/layout/Header";
import Landing from "@/components/sections/Landing";
import About from "@/components/sections/About";
import Speakers from "@/components/sections/Speakers";
import Schedules from "@/components/sections/Schedules";
import MadePossible from "@/components/sections/MadePossible";
import FAQs from "@/components/sections/FAQs";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Landing />
      <About />
      <Speakers />
      <Schedules />
      <MadePossible />
      <FAQs />
    </div>
  );
}
