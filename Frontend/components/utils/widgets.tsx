import { Input } from "@nextui-org/input";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { BiSolidWidget } from "react-icons/bi";

function Widgets(props: any) {
  const [selected, setSelected] = React.useState("");

  const items = [
    {
      key: "branch",
      label: "Branch",
    },
    {
      key: "employees",
      label: "Employees",
    },
    {
      key: "teacher",
      label: "Teacher",
    },
    {
      key: "parent",
      label: "Parent",
    },
    {
      key: "student",
      label: "Student",
    },
    {
      key: "classes",
      label: "Classes",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <BiSolidWidget size={30} color="orange" />
        <h1 className="">Widget</h1>
        <h1 className="">{props.num}</h1>
        <hr className="h-px my-8 w-full bg-gray-500 border-1 " />
      </div>
      <div className="flex flex-col gap-5">
        <Input placeholder="Widget Title" />
        <Input placeholder="Widget Color" />
        <Dropdown>
          <DropdownTrigger>
            <Input value={selected} />
          </DropdownTrigger>
          <DropdownMenu
            selectionMode="single"
            aria-label="Dynamic Actions"
            items={items}
          >
            {(item) => (
              <DropdownItem
                onClick={() => {
                  setSelected(item.label);
                }}
                key={item.key}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Widgets;
