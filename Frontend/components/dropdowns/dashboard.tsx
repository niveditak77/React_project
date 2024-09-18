import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animation from "@/public/dash.json";
import Donut from "../charts/donut";
import Sctr from "../charts/scatter";
import { FaUser, FaUserTie } from "react-icons/fa";
import { PiStudentFill, PiUserRectangleFill } from "react-icons/pi";
import {
  FaChalkboardUser,
  FaClipboardUser,
  FaMoneyCheckDollar,
  FaBuilding,
  FaRoad,
  FaCakeCandles,
} from "react-icons/fa6";
import Cdr from "../calendar/cdr";

function Dashboard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {/* <div className="text-center">
        <Lottie options={defaultOptions} />{" "}
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl uppercase">
          {" "}
          <span className="">Drighna </span> Edtech.{" "}
        </h1>{" "}
      </div> */}
      <div className="grid gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border-1 rounded-lg flex items-center justify-center shadow-md">
            <Donut data={["50", "50"]} labels={["Income", "Expense"]} />
          </div>
          <div className="border-1 md:col-span-2 rounded-lg shadow-md">
            <Sctr />
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
          <div className="h-48  rounded-lg bg-blue-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaUser size={30} color="white" />
                <h1 className="text-2xl text-white">8</h1>
              </div>
              <h1 className="text-white text-2xl">Employee</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end">Total Strength</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-blue-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <PiStudentFill size={35} color="white" />
                <h1 className="text-2xl text-white">0</h1>
              </div>
              <h1 className="text-white text-2xl">Students</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end">Total Strength</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-blue-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaUserTie size={30} color="white" />
                <h1 className="text-2xl text-white">1</h1>
              </div>
              <h1 className="text-white text-2xl">Employee</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end">Total Strength</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-blue-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaChalkboardUser size={35} color="white" />
                <h1 className="text-2xl text-white">8</h1>
              </div>
              <h1 className="text-white text-2xl">Teachers</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end">Total Strength</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="border-1 rounded-lg flex items-center justify-center shadow-md">
            <Donut data={["100"]} labels={["Student Strength"]} />
          </div>
          <div className="border-1 md:col-span-2 rounded-lg shadow-md">
            <Sctr />
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
          <div className="h-48  rounded-lg bg-red-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaClipboardUser size={30} color="white" />
                <h1 className="text-2xl text-white">1</h1>
              </div>
              <h1 className="text-white text-2xl">Admission</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Interval 30 days</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-red-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaMoneyCheckDollar size={35} color="white" />
                <h1 className="text-2xl text-white">0</h1>
              </div>
              <h1 className="text-white text-2xl">Voucher</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Total Number</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-red-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaRoad size={30} color="white" />
                <h1 className="text-2xl text-white">1</h1>
              </div>
              <h1 className="text-white text-2xl">Transport</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Total Route</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-red-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaBuilding size={35} color="white" />
                <h1 className="text-2xl text-white">0</h1>
              </div>
              <h1 className="text-white text-2xl">Hostel</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Total Room</h1>
            </div>
          </div>
        </div>

        <div className="grid ">
          <div className="md:col-span-3 col-span-1 border-0 shadow-md rounded-lg">
            <Cdr />
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-2 md:gap-8 gap-2">
          <div className="h-48  rounded-lg bg-teal-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaCakeCandles size={30} color="white" />
                <h1 className="text-2xl text-white">1</h1>
              </div>
              <h1 className="text-white text-2xl">Student</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Today Birthday</h1>
            </div>
          </div>
          <div className="h-48  rounded-lg bg-teal-500 flex items-center justify-center shadow-md hover:scale-105">
            <div className="w-full px-5">
              <div className="flex flex-row justify-between">
                <FaCakeCandles size={35} color="white" />
                <h1 className="text-2xl text-white">0</h1>
              </div>
              <h1 className="text-white text-2xl">Employee</h1>
              <hr className="w-full h-1 mt-2 mb-2  bg-gray-100 border-0 rounded" />
              <h1 className="text-white text-sm text-end ">Today Birthday</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
