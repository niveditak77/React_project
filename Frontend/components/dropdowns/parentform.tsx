import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React from "react";
import FileDropper from "../utils/file-drop";
import { RiParentFill } from "react-icons/ri";

export function Heading(props: any) {
  return (
    <div className={`flex flex-row gap-1 items-center ${props.className}`}>
      <h1 className="text-warning text-lg ">{props.h1}</h1>
      <h1 className="text-warning text-lg ">{props.h2}</h1>
      <h1 className="text-warning text-lg ">{props.h3}</h1>
      <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
    </div>
  );
}

export function Wrapper(props: any) {
  return (
    <div
      className={`flex flex-col  md:flex-row lg:flex-row gap-5 items-center justify-between md:col-start-1 md:col-end-5 ${props.className}`}
    >
      {props.element}
    </div>
  );
}

function ParentForm(props: any) {
  return (
    <Card className="p-2">
      <CardHeader className="text-xl flex gap-1 items-end">
        <RiParentFill size={30} />
        Add Parent
      </CardHeader>
      <CardBody className="flex flex-col gap-5">
        <Heading h1={"Parent"} h2={"Details"} className={"mb-3"} />

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(2)
              .fill(["Name", "Relation"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
          <Wrapper
            element={Array(2)
              .fill(["Father Name", "Mother Name"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
        </div>

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(3)
              .fill(["Occpuation", "Income", "Education"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
          <Wrapper
            element={Array(4)
              .fill(["City", "State", "Mobile No", "Email"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
        </div>

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(1)
              .fill(["Address"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
          <Wrapper
            element={Array(1)
              .fill(["file"])
              .map((_, i: number) => {
                return <FileDropper key={i} />;
              })}
          />
        </div>

        <Heading h1={"Login"} h2={"Details"} className={"mb-3"} />

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(3)
              .fill(["Username", "Password", "Retype Password"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
        </div>

        <Heading h1={"Social"} h2={"Links"} className={"mb-3"} />
        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(3)
              .fill(["Facebook", "LinkedIn", "Twitter"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button color="success" className="text-white">
          save
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ParentForm;
