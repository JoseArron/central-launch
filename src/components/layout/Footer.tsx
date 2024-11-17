"use client";
import { useRef, useState, useEffect } from "react";
import WavyText from "../WavyText";
import Button from "../Button";
import { motion, useMotionValue, useSpring } from "motion/react";

const Footer = () => {
  const ref = useRef(null);
  const [isNestVisible, setIsNestVisible] = useState(false);
  const rotation = useMotionValue(0);
  const smooothRot = useSpring(rotation, {
    stiffness: 100,
    damping: 10,
    restDelta: 0.5,
  });

  // rotate nest if it is visble and scrolling down
  useEffect(() => {
    if (isNestVisible) {
      const handleWheel = (wheel: WheelEvent) => {
        if (wheel.deltaY > 0) {
          rotation.set(rotation.get() + wheel.deltaY / 30);
        }
        if (rotation.get() >= 360) {
          // if rotation is full spring back to 0
          rotation.set(0);
        }
      };

      window.addEventListener("wheel", handleWheel);
      return () => {
        window.removeEventListener("wheel", handleWheel);
      };
    }
  }, [isNestVisible, rotation]);

  return (
    <footer
      ref={ref}
      className="relative flex flex-col w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[100vh] text-foreground text-center overflow-hidden pt-4 md:pt-12 z-10"
    >
      <div className="flex flex-col gap-6 items-center z-10">
        <WavyText
          text="Create a startup with Central Launch"
          className="text-2xl md:text-3xl lg:text-4xl"
        />
        <Button
          text="Join the launch"
          link="https://forms.gle/jcsVNcpWT7zfSgMB8"
        />
      </div>
      <motion.div
        onViewportEnter={() => {
          setIsNestVisible(true);
        }}
        onViewportLeave={() => {
          setIsNestVisible(false);
        }}
        style={{
          rotate: smooothRot,
          translateY: "50%",
        }}
        className={`absolute inset-x-0 bottom-0 w-full aspect-[1519/1080] bg-[url('/assets/footer-nest.png')] bg-cover bg-no-repeat`}
      ></motion.div>
      <WavyText
        text="Made with ❤︎ by the Central Launch Team"
        className="bg-foreground rounded-full px-4 py-2 absolute text-white text-base md:text-xl lg:text-2xl z-20 bottom-8 left-1/2 -translate-x-1/2 text-nowrap"
      />
    </footer>
  );
};

export default Footer;
