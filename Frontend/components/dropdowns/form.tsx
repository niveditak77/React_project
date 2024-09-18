import {
  Card,
  CardBody,
  CardHeader,
  Input,
  RadioGroup,
  Radio,
  Dropdown,
  DropdownTrigger,
  Tooltip,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@nextui-org/react";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useTheme } from "next-themes";
import FileDropper from "@/components/utils/file-drop";

function Form(props: any) {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState("Captcha Status");
  const [color, setColor] = useState(Array(9).fill("#aabbcc"));
  const [toggle, setToggle] = useState(false);
  const [tools, setTools] = useState(Array(9).fill(0));

  const setElementTo1AtIndex = (index: any) => {
    const updatedTools = [...tools];
    updatedTools[index] = !tools[index];
    setTools(updatedTools);
  };
  const toggleColor = (index: any, clr: string) => {
    const updatedColor = [...color];
    updatedColor[index] = clr;
    setColor(updatedColor);
  };

  return (
    <div className="mt-5">
      <Card className="min-h-screen">
        <CardHeader>Website Settings</CardHeader>
        <CardBody className="flex items-center">
          <hr className="h-px mb-5 w-full  bg-gray-500 border-2 rounded-lg dark:bg-gray-500" />

          <div className="md:w-1/2 grid gap-5 w-full">
            <Input placeholder="Cms Title" isRequired />
            <Input placeholder="Cms Url Alias " isRequired />
            <RadioGroup
              label="Cms Frontend"
              isRequired
              orientation="horizontal"
            >
              <Radio value="buenos-aires">Enabled</Radio>
              <Radio value="sydney">Disabled</Radio>
            </RadioGroup>
            <RadioGroup
              label="Online Admission"
              isRequired
              orientation="horizontal"
            >
              <Radio value="buenos-aires">Enabled</Radio>
              <Radio value="sydney">Disabled</Radio>
            </RadioGroup>
            <Input placeholder="Receive Email To" isRequired />
            <Dropdown>
              <DropdownTrigger>
                <Input isRequired value={selected} />
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  onClick={() => {
                    setSelected("Enabled");
                  }}
                >
                  Enabled
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    setSelected("Disabled");
                  }}
                >
                  Disabled
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Input placeholder="Working Hours" isRequired />

            <FileDropper />
            <Input type="text" placeholder="Address" isRequired />
            <Input type="text" placeholder="Google Analytics" isRequired />
            <div className="grid gap-5 ">
              {Array(9)
                .fill(1)
                .map((_: any, i: number) => {
                  return (
                    <div className="flex flex-row " key={_ + i}>
                      <Tooltip
                        isOpen={tools[i]}
                        showArrow={true}
                        className="border-transparent"
                        content={
                          <>
                            <HexColorPicker
                              className="mt-1"
                              color={color[i]}
                              onChange={(e) => {
                                toggleColor(i, e);
                              }}
                            />{" "}
                            <Link
                              className="mt-3"
                              color="success"
                              isBlock
                              onClick={() => {
                                setElementTo1AtIndex(i);
                              }}
                            >
                              close
                            </Link>{" "}
                          </>
                        }
                      >
                        <input
                          readOnly
                          autoComplete="off"
                          onClick={() => {
                            setElementTo1AtIndex(i);
                          }}
                          className="p-4 w-full"
                          style={{
                            borderTopLeftRadius: "7px",
                            borderBottomLeftRadius: "7px",
                            backgroundColor: `${
                              theme == "light" ? "#f4f4f5" : "#27272a"
                            }`,
                          }}
                          value={"Primary Color : " + color[i]}
                        />
                      </Tooltip>
                      <div
                        style={{ backgroundColor: `${color[i]}` }}
                        className="w-3/12 rounded-tr-lg rounded-br-lg"
                      ></div>
                    </div>
                  );
                })}
            </div>
            <Input type="text" placeholder="Border Radius" isRequired />
            <Input type="text" placeholder="Mobile Number" isRequired />
            <Input type="text" placeholder="Email" isRequired />
            <Input type="text" placeholder="Fax" isRequired />
            <Input type="text" placeholder="Footer About Text" isRequired />
            <Input type="text" placeholder="Copyright Text" isRequired />
            <Input type="text" placeholder="Facebook URL" isRequired />
            <Input type="text" placeholder="Twitter URL" isRequired />
            <Input type="text" placeholder="Youtube URL" isRequired />
            <Input type="text" placeholder="Google Plus" isRequired />
            <Input type="text" placeholder="LinkedIn" isRequired />
            <Input type="text" placeholder="Pinterest" isRequired />
            <Input type="text" placeholder="Instagram" isRequired />
            <Button color="success">save</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Form;
