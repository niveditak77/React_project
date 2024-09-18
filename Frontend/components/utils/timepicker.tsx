import { Card } from "@nextui-org/react";
import React from "react";

function TimePicker() {
  return (
    <div className="flex flex-col gap-3 bg-default-100 rounded-xl p-2 ">
      <p className="text-xs text-default-500">Time Slot</p>
      <div className="flex  flex-row gap-3">
        <input type="time" className="w-full bg-default-150  p-4 rounded-lg" />
        <input type="time" className="w-full bg-default-150 p-4 rounded-lg" />
      </div>
    </div>
  );
}

export default TimePicker;
