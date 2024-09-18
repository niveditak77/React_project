"use client";
import React, { useState, useContext, createContext, Component } from "react";
import { useTheme } from "next-themes";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import MobileMenu from "@/components/mobile-menu/mobile-menu";
import { siteConfig } from "@/config/site";
import Routes from "@/components/routes";
import { MdSpaceDashboard } from "react-icons/md";
import { RiContractLeftLine } from "react-icons/ri";
import { RiContractRightLine } from "react-icons/ri";
import { MdForklift } from "react-icons/md";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { LiaWpforms } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FaUserClock } from "react-icons/fa6";
import { RxIdCard } from "react-icons/rx";
import { BsCashCoin } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { SiMicrosoftacademic } from "react-icons/si";

const myContext = createContext<any>(0);
const routeContext = createContext<any>(0);

function Page() {
  const Router = useRouter();

  const [selected, setSelected] = useState("Dashboard");
  const [size, setSize] = useState("64");
  const { theme } = useTheme();

  const names = [
    "MdForklift",
    "BsGlobeCentralSouthAsia",
    "HiUserGroup",
    "LiaWpforms",
    "PiStudentFill",
    "RiParentFill",
    "FaUserTie",
  ];

  const icons = [
    <MdForklift
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <BsGlobeCentralSouthAsia
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <HiUserGroup
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <LiaWpforms
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <PiStudentFill
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <RiParentFill
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <FaUserTie
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <FaIdCard
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
    <PiCertificateFill
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={25}
    />,
    <FaUserClock
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={25}
    />,
    <SiMicrosoftacademic
      onClick={() => {
        setSize(size == "64" ? "14" : "64");
      }}
      size={20}
    />,
  ];

  return (
    <>
      <myContext.Provider value={{ selected, setSelected }}>
        <MobileMenu />
      </myContext.Provider>

      <div className="">
        <aside
          id="sidebar-multi-level-sidebar"
          className={`fixed top-0  left-0 z-40 ${"w-" + size}
           h-screen   -translate-x-full sm:translate-x-0  hidden md:block`}
          aria-label="Sidebar"
        >
          <div
            className={`h-full px-3 py-4 overflow-y-auto bg-gray-50  ${
              theme == "light" ? "bg-[#f4f4f5]" : "dark:bg-[#2d2d30]"
            }`}
          >
            <div className="flex justify-end">
              {size == "64" ? (
                <RiContractLeftLine
                  color="white"
                  size={30}
                  onClick={() => {
                    setSize(size == "64" ? "14" : "64");
                  }}
                />
              ) : (
                <RiContractRightLine
                  color="white"
                  size={30}
                  onClick={() => {
                    if (size == "64") setSize("14");
                    if (size == "14") setSize("64");
                  }}
                />
              )}
            </div>
            <ul className="space-y-2 font-medium">
              <li
                onClick={() => {
                  setSelected("Dashboard");
                  Router.push(`/dashboard`);
                }}
                className="pl-2 hover:cursor-pointer p-2 flex flex-row gap-5 items-center"
              >
                <MdSpaceDashboard size={20} className="" />
                <span className={`${size == "14" ? "hidden" : "block"}`}>
                  Dashboard
                </span>
              </li>
              <li>
                {siteConfig.navMenuItems.map((item, index) =>
                  size == "64" ? (
                    <Accordion key={index}>
                      <AccordionItem
                        title={size == "64" ? item.label : ""}
                        startContent={icons[index]}
                      >
                        {item.href.map((_, i) => {
                          if (!_.isNested)
                            return (
                              <li
                                key={i}
                                onClick={() => {
                                  setSelected(_.key);
                                  Router.push(`#${_.item}`);
                                }}
                                className="hover:cursor-pointer hover:bg-success rounded-md mt-2 p-3  pl-8"
                              >
                                {_.item}
                              </li>
                            );
                          else
                            return (
                              <Accordion key={index + i}>
                                <AccordionItem
                                  title={size == "64" ? item.href[i].item : ""}
                                  startContent={
                                    <GoDotFill
                                      onClick={() => {
                                        setSize(size == "64" ? "14" : "64");
                                      }}
                                      size={20}
                                    />
                                  }
                                >
                                  {item.href[i].items?.map((items, i) => {
                                    return (
                                      <li
                                        key={i + index}
                                        onClick={() => {
                                          _.isNested
                                            ? setSelected(
                                                _.item.toLowerCase() +
                                                  "-" +
                                                  items.toLowerCase()
                                              )
                                            : setSelected(_.key);
                                          console.log(selected);
                                          Router.push(
                                            `#${_.item.toLowerCase()}-${items.toLowerCase()}`
                                          );
                                        }}
                                        className="hover:cursor-pointer hover:bg-success rounded-md mt-2 p-3  pl-8"
                                      >
                                        {items}
                                      </li>
                                    );
                                  })}
                                </AccordionItem>
                              </Accordion>
                            );
                        })}
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <div className="p-2 flex flex-row gap-5 items-center">
                      {icons[index]}
                    </div>
                  )
                )}
              </li>
            </ul>
          </div>
        </aside>

        <div className={`${size == "64" ? "sm:ml-64" : "sm:ml-14"}`}>
          <Navbar />
          <div className="mt-5 px-4">
            <routeContext.Provider value={{ selected, setSelected }}>
              <Routes />
            </routeContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

export const useMyContext = () => {
  return useContext(myContext);
};

export const rContext = () => {
  return useContext(routeContext);
};
