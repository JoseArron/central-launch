"use client";
import React, { useEffect, useState } from "react";
import getTimeLeft from "@/utils/getTimeLeft";

interface CountdownProps {
    endTime: number;
    }

const Countdown = ({
  endTime,
}: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(endTime));
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft(endTime));
            setLoading(false);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <div className="flex w-full flex-row justify-end m-auto gap-6">
                {Object.entries(timeLeft).map((time) => {
                    const label = time[0];
                    const value = time[1];
                    return (
                        <div className='flex flex-col items-center justify-center mt-6' key={label}>
                            <div className='text-neutral-950 bg-white p-4 font-bold rounded-md mb-2'>
                                {value}
                            </div>
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
        );
    };

export default Countdown;
