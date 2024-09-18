import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import FileDropper from "../utils/file-drop";
import { RiParentFill } from "react-icons/ri";
import DatePicker from "../utils/datepicker";
import Ddown from "../utils/dropdown";

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

function EmployeeForm(props: any) {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <Card className="p-2">
      <CardHeader className="text-xl flex gap-1 items-end">
        <RiParentFill size={30} />
        Add Employee
      </CardHeader>
      <CardBody className="flex flex-col gap-5">
        <Heading h1={"Academic"} h2={"Details"} className={"mb-3"} />

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(2)
              .fill(["Role", "Joining Date"])
              .map((_, i: number) => {
                return i !== 1 ? (
                  <Input key={i} placeholder={_[i]} />
                ) : (
                  <div className="w-full">
                    <DatePicker label="Joining Date" />
                  </div>
                );
              })}
          />
          <Wrapper
            element={Array(2)
              .fill(["Designation", "Department"])
              .map((_, i: number) => {
                return i == 0 ? (
                  <Ddown key={i} items={["demo"]} label={"Designation"} />
                ) : (
                  <Ddown key={i} items={["demo"]} label={"Department"} />
                );
              })}
          />
        </div>

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(3)
              .fill(["Qualification", "Experience Details", "Total Experience"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
        </div>

        <Heading h1={"Employee"} h2={"Details"} className={"mb-3"} />

        <div className="flex flex-col gap-5">
          <Wrapper
            element={Array(2)
              .fill(["Name", "Gender"])
              .map((_, i: number) => {
                return i == 0 ? (
                  <Input key={i} placeholder={_[i]} />
                ) : (
                  <Ddown key={i} items={["Male", "Female"]} label={"Gender"} />
                );
              })}
          />
          <Wrapper
            element={Array(3)
              .fill(["Religion", "Blood Group", "Date of Birth"])
              .map((_, i: number) => {
                return i == 0 ? (
                  <Input key={i} placeholder={_[i]} />
                ) : i == 1 ? (
                  <Ddown key={i} items={["Male", "Female"]} label={"Gender"} />
                ) : (
                  <div className="w-full">
                    <DatePicker label="Date of Birth" />
                  </div>
                );
              })}
          />
          <Wrapper
            element={Array(2)
              .fill(["Mobile No", "Email"])
              .map((_, i: number) => {
                return <Input key={i} placeholder={_[i]} />;
              })}
          />
          <Wrapper
            element={Array(2)
              .fill(["Present Address", "Permanent Address"])
              .map((_, i: number) => {
                return <Textarea key={i} placeholder={_[i]} />;
              })}
          />
          <Wrapper
            element={Array(1)
              .fill(["Present Address", "Permanent Address"])
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

        <Heading h1={"Bank"} h2={"Details"} className={"mt-5 mb-3"} />
        <Wrapper
          className={"mt-5"}
          element={Array(1)
            .fill(["Bank details Already Exist"])
            .map((_, i: number) => {
              return (
                <Checkbox
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                  key={i}
                >
                  {_[i]}
                </Checkbox>
              );
            })}
        />

        <div className={``}>
          {isSelected ? (
            <></>
          ) : (
            <>
              <Wrapper
                className={"mt-5"}
                element={Array(3)
                  .fill(["Bank Name", "Holder Name", "Bank Branch"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(3)
                  .fill(["Bank Address", "IFSC Code", "Account No"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
            </>
          )}
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

export default EmployeeForm;
