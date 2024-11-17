"use client";

import React, { useState } from "react";
import ScheduleItem from "../ScheduleItem";
import WavyText from "../WavyText";

const Schedules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");

  const renderContent = () => {
    switch (activeTab) {
      case "day1":
        return (
          <div className="w-full overflow-x-auto overflow-y-auto max-h-96">
            <table className="w-full text-lg border-collapse">
              <thead className="text-white">
                <tr>
                  <th className="p-3 text-center font-bold bg-foreground">
                    Time
                  </th>
                  <th className="p-3 text-center font-bold bg-foreground">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <ScheduleItem time="8:00 - 8:30 AM" activity="Registration" />
                <ScheduleItem
                  time="8:30 - 9:00 AM"
                  activity="Opening Ceremony"
                />
                <ScheduleItem time="9:00 - 9:30 AM" activity="First Speaker" />
                <ScheduleItem
                  time="9:30 - 10:00 AM"
                  activity="Second Speaker"
                />
                <ScheduleItem
                  time="10:00 - 10:30 AM"
                  activity="Third Speaker"
                />
                <ScheduleItem
                  time="10:30 - 11:00 AM"
                  activity="Workshop on Ideation"
                />
                <ScheduleItem
                  time="11:00 - 11:30 AM"
                  activity="Workshop on Project Pitching"
                />
                <ScheduleItem time="11:30 - 12:00 PM" activity="Pretotyping" />
                <ScheduleItem
                  time="12:00 - 1:00 PM"
                  activity="Team Formation & Lunch"
                />
                <ScheduleItem
                  time="1:00 - 2:00 PM"
                  activity="Initial Project Planning"
                />
                <ScheduleItem time="2:00 - 3:00 PM" activity="Work Session" />
                <ScheduleItem
                  time="3:00 - 3:30 PM"
                  activity="Coffee, Networking Break, and Mentorship"
                />
                <ScheduleItem time="3:30 - 4:30 PM" activity="Work Session" />
                <ScheduleItem
                  time="4:30 - 5:00 PM"
                  activity="Check-in & Mentorship"
                />
                <ScheduleItem time="5:00 - 6:30 PM" activity="Work Session" />
                <ScheduleItem time="6:30 - 8:00 PM" activity="Dinner Break" />
                <ScheduleItem
                  time="8:00 PM - Overnight"
                  activity="Night Work Session"
                />
              </tbody>
            </table>
          </div>
        );
      case "day2":
        return (
          <div className="w-full overflow-x-auto overflow-y-auto max-h-96">
            <table className="w-full text-lg border-collapse">
              <thead className="text-white">
                <tr>
                  <th className="p-3 text-center font-bold bg-foreground">
                    Time
                  </th>
                  <th className="p-3 text-center font-bold bg-foreground">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <ScheduleItem
                  time="8:00 - 9:00 AM"
                  activity="Breakfast & Morning Check-in"
                />
                <ScheduleItem
                  time="9:00 - 11:30 AM"
                  activity="Final Work Session"
                />
                <ScheduleItem
                  time="11:30 - 12:00 PM"
                  activity="Requirements Submission"
                />
                <ScheduleItem time="12:00 - 1:00 PM" activity="Lunch Break" />
                <ScheduleItem
                  time="2:00 - 5:00 PM"
                  activity="Pitching to Judges"
                />
                <ScheduleItem
                  time="5:00 - 6:00 PM"
                  activity="Judges Deliberation & Networking"
                />
                <ScheduleItem
                  time="6:00 - 8:00 PM"
                  activity="Dinner Party and Awarding Ceremony"
                />
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

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
              className="absolute top-4 left-0 w-full max-w-xs mx-auto object-cover"
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
              className="absolute top-4 left-0 w-full max-w-xs mx-auto object-cover"
            />
          )}
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg bg-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default Schedules;
