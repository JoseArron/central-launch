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
    mins: "00",
    secs: "00",
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
    <div className="flex flex-row gap-6 justify-center text-2xl">
      {Object.entries(timeLeft).map((time) => {
        const label = time[0];
        const value = time[1];
        return (
          <div
            className="flex flex-col justify-center font-semibold"
            key={label}
          >
            <div className="bg-foreground text-white p-4 rounded-md mb-2">
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
