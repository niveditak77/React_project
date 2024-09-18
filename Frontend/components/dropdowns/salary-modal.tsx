import { Button, Card, Input } from "@nextui-org/react";
import React from "react";

function SalaryModal() {
  return (
    <>
      <div className="sm:flex grid gap-5 w-full">
        <Card className="p-2 w-full gap-5">
          <h1>Allowances</h1>
          <hr className="h-px mb-5  bg-gray-500 border-1 rounded-lg dark:bg-gray-500" />
          <Input placeholder="Name of Allowance" isRequired type="text" />
          <Input placeholder="Amount" isRequired type="text" />
          <Button color="primary">add rows</Button>
        </Card>
        <Card className="p-2 w-full gap-5">
          <h1>Deductions</h1>
          <hr className="h-px mb-5  bg-gray-500 border-1 rounded-lg dark:bg-gray-500" />
          <Input placeholder="Name of Deductions" isRequired type="text" />
          <Input placeholder="Amount" isRequired type="text" />
          <Button color="primary">add rows</Button>
        </Card>
      </div>
      <div className="sm:flex grid gap-5 w-full mt-5">
        <Card className="p-2 w-full gap-5">
          <h1>Salary Details</h1>
          <hr className="h-px mb-5  bg-gray-500 border-1 rounded-lg dark:bg-gray-500" />
          <div className="flex flex-row items-center justify-between">
            <h1>Basic Salary</h1>
            <Input className="w-fit" placeholder="$ 0" isRequired type="text" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Total Allowance</h1>
            <Input className="w-fit" placeholder="$ 0" isRequired type="text" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Total Deductions</h1>
            <Input className="w-fit" placeholder="$ 0" isRequired type="text" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <h1>Net Salary</h1>
            <Input className="w-fit" placeholder="$ 0" isRequired type="text" />
          </div>
        </Card>
      </div>
    </>
  );
}

export default SalaryModal;
