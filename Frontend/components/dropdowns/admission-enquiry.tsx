import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import DatePicker from "../utils/datepicker";
import GenricTabs from "./genric-tabs";
import { IoIosAddCircle } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

function AdmissionEnquiry(props: any) {
  const [dp, setDp] = useState("Select Status");

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <Card className="lg:w-1/4 h-fit">
        <CardHeader className="text-2xl flex gap-2">
          <IoInformationCircle size={30} />
          Enquiry Details
        </CardHeader>
        <hr className="h-px my-1 mb-5 bg-gray-600 border-1" />
        <CardBody className="flex gap-5">
          {props.enquiryDetails.map((item: any, index: number) => {
            return (
              <div className="flex px-5 flex-row justify-between">
                <h1>{item.i1}</h1>
                <h1>{item.i2}</h1>
              </div>
            );
          })}
        </CardBody>
      </Card>
      <div className="lg:w-3/4 flex flex-col gap-5">
        <Card className="col-span-3 mt-5 md:mt-0">
          <CardHeader className="text-2xl flex gap-2">
            <IoIosAddCircle size={30} />
            Add Follow Up
          </CardHeader>
          <hr className="h-px my-1 mb-5 bg-gray-600 border-1" />
          <CardBody className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 px-5 justify-between">
              <DatePicker label={"Follow Up Date"} />
              <DatePicker label={"Next Follow Up Date"} />
              <Textarea className="md:col-span-2" label="Response" />
              <Dropdown>
                <DropdownTrigger>
                  <Input label={dp} />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  onAction={(key: any) => setDp(key)}
                >
                  <DropdownItem key="Active">New Active</DropdownItem>
                  <DropdownItem key="Partially Closed">
                    Partially Closed
                  </DropdownItem>
                  <DropdownItem key="Missed">Missed</DropdownItem>
                  <DropdownItem key="Closed">Closed</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Textarea className="" label="Response" />
            </div>
            <div className="flex mt-5  justify-end pr-5">
              <Button color="success" className="w-12 text-white">
                save
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card className="col-start-3 col-span-3 mt-5 md:mt-0">
          <CardHeader className="text-2xl flex gap-2">
            <IoIosCall size={30} />
            Follow Up List
          </CardHeader>
          <hr className="h-px my-1 mb-5 bg-gray-600 border-1" />
          <CardBody>
            <GenricTabs
              table={[
                "Sl",
                "Follow Up Date",
                "Next Follow Up Date",
                "Response",
                "Note",
                "Status",
                "Action",
              ]}
              table2={[]}
              tableData={[]}
              tabs={["List"]}
              inputs={[
                "Name",
                "Gender",
                "Date of Birth",
                "Previous School",
                "Father Name",
                "Mother Name",
                "Mobile No",
                "Email",
                "Address",
                "No of Child",
                "Assigned",
                "Reference",
                "Response",
                "Note",
                "Date",
                "Class Applying For",
              ]}
              type={[0, 1, 4, 5, 0, 0, 0, 0, 0, 1, 1, 1, 5, 5, 4, 1]}
              table2Dropdown={[1, 1, 0]}
              hasLayout={false}
              showHeader={true}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default AdmissionEnquiry;
