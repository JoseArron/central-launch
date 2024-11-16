"use client";

import React from 'react';

interface ScheduleItemProps {
  time: string;
  activity: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, activity }) => {
  return (
    <tr>
      <td className="p-3 text-left">{time}</td>
      <td className="p-3 text-left">{activity}</td>
    </tr>
  );
};

export default ScheduleItem;