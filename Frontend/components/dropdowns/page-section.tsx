"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  Input,
  Tooltip,
  Link,
  Radio,
  RadioGroup,
  Switch,
  Button,
} from "@nextui-org/react";
import FileDropper from "@/components/utils/file-drop";
import { useTheme } from "next-themes";
import { HexColorPicker } from "react-colorful";
import Widgets from "@/components/utils/widgets";

function PageSection(props: any) {
  const [selectedTab, setSelectedTab] = useState<any>();
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState(Array(5).fill("#82828d"));
  const [tools, setTools] = useState(Array(5).fill(false));
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <Tabs
        color="success"
        aria-label="Options"
        classNames={{
          tabList: "flex flex-col min-w-full",
        }}
        onSelectionChange={(e) => {
          setSelectedTab(props.mainTabList.indexOf(e));
          console.log(props.mainTabList.indexOf(e));
        }}
      >
        {props.mainTabList.map((_: any, i: any) => {
          return (
            <Tab key={_} title={_} className="md:col-span-3">
              <div className="">
                {props.sublist[i].tabs.length ? (
                  <Tabs
                    className="w-full"
                    key={_ + i}
                    color="success"
                    classNames={{ tabList: "flex flex-row" }}
                  >
                    {props.sublist[i]
                      ? props.sublist[i].tabs.map((_: any, tabs: number) => {
                          return (
                            <Tab title={_} key={_ + tabs} className="">
                              <div className="grid gap-5">
                                {props.sublist[i].inputs[0].i0
                                  ? props.sublist[i].inputs[tabs][
                                      `i${tabs}`
                                    ].map((_: any, ix: number) => {
                                      return (
                                        <div key={_ + ix} className="">
                                          {props.sublist[i].inputs[tabs].type[
                                            ix
                                          ] === 0 ? (
                                            <Input placeholder={_} />
                                          ) : props.sublist[i].inputs[tabs]
                                              .type[ix] === 3 ? (
                                            <FileDropper />
                                          ) : props.sublist[i].inputs[tabs]
                                              .type[ix] === 1 ? (
                                            <div className="flex flex-row ">
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
                                                    borderBottomLeftRadius:
                                                      "7px",
                                                    backgroundColor: `${
                                                      theme == "light"
                                                        ? "#f4f4f5"
                                                        : "#27272a"
                                                    }`,
                                                  }}
                                                  value={
                                                    "Primary Color : " +
                                                    color[i]
                                                  }
                                                />
                                              </Tooltip>
                                              <div
                                                style={{
                                                  backgroundColor: `${color[i]}`,
                                                }}
                                                className="w-3/12 rounded-tr-lg rounded-br-lg"
                                              ></div>
                                            </div>
                                          ) : (
                                            <div className="flex flex-row items-center gap-5">
                                              <h1>Show Website</h1>
                                              <Switch></Switch>
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })
                                  : null}
                                {props.sublist[0].inputs[tabs].hasWidgets ? (
                                  <>
                                    {Array(4)
                                      .fill(1)
                                      .map((_, i) => {
                                        return (
                                          <Widgets key={_ + i} num={i + 1} />
                                        );
                                      })}
                                  </>
                                ) : null}
                                <Button color="success" className="w-3/12 mt-5">
                                  save
                                </Button>
                              </div>
                            </Tab>
                          );
                        })
                      : null}
                  </Tabs>
                ) : selectedTab == 1 ||
                  selectedTab == 6 ||
                  selectedTab == 8 ||
                  selectedTab == 9 ||
                  selectedTab == 10 ? (
                  <Card className="md:col-span-3">
                    <CardBody className="flex flex-col gap-5">
                      {props.sublist[selectedTab].inputs.map(
                        (_: any, i: number) => {
                          return props.sublist[selectedTab].type[i] == 0 ? (
                            <Input placeholder={_} />
                          ) : props.sublist[selectedTab].type[i] == 1 ? (
                            <FileDropper />
                          ) : props.sublist[selectedTab].type[i] == 2 ? (
                            <div className="flex flex-row gap-5">
                              <h1>{_}</h1>
                              <Switch />
                            </div>
                          ) : null;
                        }
                      )}
                      <Button color="success">save</Button>
                    </CardBody>
                  </Card>
                ) : null}
              </div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default PageSection;
