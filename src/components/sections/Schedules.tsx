"use client";

import React, { useState } from "react";
import ScheduleItem from "../ScheduleItem";
import WavyText from "../WavyText";

const schedules = {
  day1: [
    { time: "7:30 AM", activity: "Registration and Networking" },
    { time: "8:15 AM", activity: "Opening Program" },
    {
      time: "8:30 AM",
      activity: "Talk Show",
    },
    { time: "9:00 AM", activity: "Participant Introduction" },
    { time: "9:30 AM", activity: "Team Formation" },
    {
      time: "10:15 AM",
      activity: "Creativity and Opportunity Recognition Lecture",
    },
    { time: "10:30 AM", activity: "Ideation Workshop" },
    { time: "11:15 AM", activity: "1st Half Idea Presentation" },
    { time: "12:00 NN", activity: "Lunch Break" },
    { time: "1:00 PM", activity: "2nd Half Idea Presentation" },
    { time: "1:30 PM", activity: "Preto-typing Activity" },
    { time: "3:30 PM", activity: "Product Pitching" },
    { time: "4:30 PM", activity: "Rejection Therapy Activity" },
  ],
  day2: [
    { time: "8:00 AM", activity: "Registration and Networking" },
    { time: "8:30 AM", activity: "Panel Discussion: Why Startup fails?" },
    { time: "9:00 AM", activity: "Rejection Therapy Activity Presentation" },
    {
      time: "10:30 AM",
      activity: "Creating a good pitch through storytelling",
    },
    { time: "11:30 AM", activity: "Prototyping Activity" },
    { time: "12:00 NN", activity: "Working Lunch" },
    { time: "3:00 PM", activity: "Culminating activity" },
    { time: "5:00 PM", activity: "Awarding of Certificates" },
  ],
};

const Schedules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");

  return (
    <div
      id="schedule"
      className="flex flex-col items-center justify-center py-16 px-4 md:px-24 lg:px-24 xl:px-36 bg-sky z-10"
    >
      <WavyText
        text={"Schedule"}
        className="text-white text-4xl font-medium bg-foreground p-4 rounded-full max-w-fit justify-self-center mb-4"
      />
      <div className="flex justify-center space-x-4 mb-5 w-full">
        <div className="relative">
          <button
            className={`py-3 max-w-xs min-w-48 font-semibold rounded-lg transition-colors duration-300 ${activeTab === "day1" ? "bg-[#87BC38] text-white" : "bg-white text-[#87BC38] border border-[#87BC38]"}`}
            onClick={() => setActiveTab("day1")}
          >
            Day 1
          </button>
          {activeTab === "day1" && (
            <img
              src="/assets/active.png"
              alt="Active Tab Image"
              className="absolute top-5 left-0 w-full max-w-xs mx-auto object-cover"
            />
          )}
        </div>
        <div className="relative">
          <button
            className={`py-3 max-w-xs min-w-48 font-semibold rounded-lg transition-colors duration-300 ${activeTab === "day2" ? "bg-[#87BC38] text-white" : "bg-white text-[#87BC38] border border-[#87BC38] "}`}
            onClick={() => setActiveTab("day2")}
          >
            Day 2
          </button>
          {activeTab === "day2" && (
            <img
              src="/assets/active.png"
              alt="Active Tab Image"
              className="absolute top-5 left-0 w-full max-w-xs mx-auto object-cover"
            />
          )}
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto shadow-lg bg-white rounded-lg overflow-hidden">
        <div className="w-full overflow-x-auto overflow-y-auto max-h-96">
          <table className="w-full text-lg border-collapse ">
            <thead className="text-white sticky top-0 bg-foreground">
              <tr>
                <th className="p-3 text-center font-bold bg-foreground min-w-[100px]">
                  Time
                </th>
                <th className="p-3 text-center font-bold bg-foreground">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody className="text-foreground">
              {schedules[activeTab].map((schedule, index) => (
                <ScheduleItem
                  key={index}
                  time={schedule.time}
                  activity={schedule.activity}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
