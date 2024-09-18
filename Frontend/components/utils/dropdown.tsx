import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function Ddown(props: any) {
  const [label, setLabel] = useState(props.label);

  return (
    <div className="w-full mt-2">
      <Dropdown className={""}>
        <DropdownTrigger>
          <Button className="min-w-full h-[4em]" variant="flat">
            {label}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="solid"
          aria-label="Action event example"
          onAction={(key) => setLabel(key)}
        >
          {props.items.map((item: string, i: number) => {
            return <DropdownItem key={item}>{item}</DropdownItem>;
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Ddown;
