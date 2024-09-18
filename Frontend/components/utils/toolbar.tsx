import { Button } from "@nextui-org/button";
import React from "react";
import {
  FaRegCopy,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaPrint,
  FaTableColumns,
} from "react-icons/fa6";
import { SearchIcon } from "../icons";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";

function Toolbar() {
  const productHeader = [
    <FaRegCopy size={20} />,
    <FaFileExcel size={20} />,
    <FaFileCsv size={20} />,
    <FaFilePdf size={20} />,
    <FaPrint size={20} />,
    <FaTableColumns size={20} />,
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-1 mb-4 mt-5 px-2 justify-between">
      <div className="w-full flex gap-2">
        {productHeader.map((_, i) => {
          return (
            <Button
              isIconOnly
              key={i}
              className="hover:bg-default text-white"
              color="secondary"
            >
              {_}
            </Button>
          );
        })}
      </div>
      <Input
        aria-label="Search"
        autoComplete="off"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        className="w-full md:w-fit"
      />
    </div>
  );
}

export default Toolbar;
