import { Card, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import Category from "./category";

function TabsCat(props: any) {
  return (
    <div className="flex flex-col">
      <Tabs
        color="success"
        className=""
        classNames={{
          tabList: "flex flex-col lg:flex-row w-full",
        }}
      >
        {props.tabs.map((head: any, i: number) => {
          return (
            <Tab key={i} title={head}>
              <Category
                iphead={props.iphead[i]}
                tablehead={props.tablehead[i]}
                inputs={["Name"]}
                type={[0]}
                table={props.tables[i]}
                tabledata={props.tabledata[i]}
              />
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default TabsCat;
