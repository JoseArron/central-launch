"use client";

import React, { useEffect, useState } from "react";
import { getTimeLeft } from "@/lib/utils";
import { Time } from "@/lib/types";

interface CountdownProps {
  endTime: number;
}

const Countdown = ({ endTime }: CountdownProps) => {
  const initialTimeLeft: Time = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="flex flex-row m-auto gap-6">
      {Object.entries(timeLeft).map((time) => {
        const label = time[0];
        const value = time[1];
        return (
          <div
            className="flex flex-col items-center justify-center mt-6"
            key={label}
          >
            <div className="text-neutral-950 bg-white p-4 font-bold rounded-md mb-2">
              {value}
            </div>
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default Countdown;
