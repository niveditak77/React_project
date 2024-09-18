import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React from "react";
import Ddown from "../utils/dropdown";
import FileDropper from "../utils/file-drop";

function MultipleImport() {
  return (
    <Card>
      <CardHeader> Multiple Import</CardHeader>
      <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
      <CardBody>
        <div className="mt-2 mb-4 flex justify-end">
          <Button color="secondary">Download Sample Import File</Button>
        </div>
        <div className=" border-1 flex flex-col text-warning p-4 border-warning rounded-xl">
          <p>Instructions</p>
          <p>1. Download the first sample file.</p>
          <p>
            {" "}
            2. Open the downloaded 'csv' file and carefully fill the details of
            the student.{" "}
          </p>
          <p>
            3. The date you are trying to enter the "Birthday" and
            "AdmissionDate" column make sure the date format is Y-m-d
            (2024-01-31).
          </p>
          <p>4. Do not import the duplicate "Roll Number" And "Register No".</p>
          <p>5. For student "Gender" use Male, Female value.</p>
          <p>
            6. If enable Automatically Generate login details, leave the
            "username" and "password" columns blank.
          </p>
          <p>
            7. The Category name comes from another table, so for the
            "Category", enter Category ID (can be found on the Category page).
          </p>
          <p>
            8. If a parent is existing / if you want to use the same parent
            information for multiple students only enter the "GuardianUsername"
            and leave other columns blank.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-5 px-5 ">
          <Ddown label={"Class"} items={["demo"]} />
          <Ddown label={"Section"} items={["demo"]} />
          <FileDropper />
        </div>
      </CardBody>
      <CardFooter className="justify-center">
        <Button color="success">import</Button>
      </CardFooter>
    </Card>
  );
}

export default MultipleImport;
