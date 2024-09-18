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
import DatePicker from "../utils/datepicker";
import Ddown from "../utils/dropdown";
import FileDropper from "../utils/file-drop";

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

function AdmissionForm(props: any) {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <Card className="p-2">
      <CardHeader className="text-xl">Student Admission</CardHeader>
      <CardBody>
        <Heading h1={"Academic"} h2={"Details"} className={"mb-3"} />

        <Wrapper
          element={Array(4)
            .fill(["Academic Year", "Register No", "Roll", "Admission Date"])
            .map((_, i: number) => {
              return i !== 3 ? (
                <Input key={i} placeholder={_[i]} />
              ) : (
                <div className="w-full" key={i}>
                  <DatePicker key={i} label={_[i]} />
                </div>
              );
            })}
        />

        <Wrapper
          element={Array(3)
            .fill(["Select Class", "Select Section", "Select Category"])
            .map((_, i: number) => {
              return (
                <Ddown
                  items={["demo", "Science", "demo"]}
                  key={i}
                  label={_[i]}
                />
              );
            })}
        />

        {/* student details */}

        <Heading h1={"Student"} h2={"Details"} className={"mt-5 mb-3"} />

        <Wrapper
          element={Array(3)
            .fill(["First Name", "Last Name", "Gender"])
            .map((_, i: number) => {
              return i !== 2 ? (
                <Input key={i} placeholder={_[i]} />
              ) : (
                <Ddown items={["Male", "Female"]} key={i} label={_[i]} />
              );
            })}
        />

        <Wrapper
          element={Array(2)
            .fill(["Select Blood Group", "Date of Birth"])
            .map((_, i: number) => {
              return i !== 1 ? (
                <Ddown
                  key={i}
                  label={"Select BloodGroup"}
                  items={["A+", "B+", "AB+", "O+"]}
                />
              ) : (
                <div className="w-full mt-5">
                  <DatePicker key={i} label={"Date Of Birth"} />
                </div>
              );
            })}
        />

        <Wrapper
          element={Array(3)
            .fill(["Mother Tongue", "Religion", "Caste"])
            .map((_, i: number) => {
              return <Input key={i} placeholder={_[i]} />;
            })}
        />

        <Wrapper
          className={"mt-5"}
          element={Array(4)
            .fill(["Mobile No", "Email", "City", "State"])
            .map((_, i: number) => {
              return <Input key={i} placeholder={_[i]} />;
            })}
        />
        <Wrapper
          className={"mt-5"}
          element={Array(2)
            .fill(["Present Address", "Permanent Address"])
            .map((_, i: number) => {
              return <Textarea key={i} placeholder={_[i]} />;
            })}
        />
        <Wrapper
          className={"mt-5"}
          element={Array(1)
            .fill([""])
            .map((_, i: number) => {
              return <FileDropper />;
            })}
        />

        <Heading h1={"Login"} h2={"Details"} className={"mt-5 mb-3"} />
        <Wrapper
          className={"mt-5"}
          element={Array(3)
            .fill(["Username", "Password", "Retype Password"])
            .map((_, i: number) => {
              return <Input key={i} placeholder={_[i]} />;
            })}
        />

        {/* guardian details */}
        <Heading h1={"Guardian"} h2={"Details"} className={"mt-5 mb-3"} />
        <Wrapper
          className={"mt-5"}
          element={Array(1)
            .fill(["Guardian Already Exist"])
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
            <Wrapper
              className={"mt-5"}
              element={Array(1)
                .fill(["Select Guardian"])
                .map((_, i: number) => {
                  return (
                    <Ddown
                      items={["Parent 1", "Parent 2"]}
                      key={i}
                      label={_[i]}
                    />
                  );
                })}
            />
          ) : (
            <>
              <Wrapper
                className={"mt-5"}
                element={Array(2)
                  .fill(["Name", "Relation"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(2)
                  .fill(["Father Name", "Mother Name"])
                  .map((_, i: number) => {
                    return <Input placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(3)
                  .fill(["Occuptaion", "Income", "Education"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(4)
                  .fill(["City", "State", "Mobile Number", "Email"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(1)
                  .fill(["Address"])
                  .map((_, i: number) => {
                    return <Textarea key={i} placeholder={_[i]} />;
                  })}
              />
              <Wrapper
                className={"mt-5"}
                element={Array(1)
                  .fill(["Address"])
                  .map((_, i: number) => {
                    return <FileDropper key={i} />;
                  })}
              />

              <Wrapper
                className={"mt-5"}
                element={Array(3)
                  .fill(["Username", "Password", "Retype Password"])
                  .map((_, i: number) => {
                    return <Input key={i} placeholder={_[i]} />;
                  })}
              />
            </>
          )}
        </div>

        {/* transport details */}
        <Heading h1={"Transport"} h2={"Details"} className={"mt-5 mb-3"} />
        <Wrapper
          className={"mt-5"}
          element={Array(2)
            .fill(["Transport Route", "Vehicle No"])
            .map((_, i: number) => {
              return (
                <Ddown items={["Route", "Vehicle No"]} key={i} label={_[i]} />
              );
            })}
        />

        {/* hostel details */}
        <Heading h1={"Hostel"} h2={"Details"} className={"mt-5 mb-3"} />
        <Wrapper
          className={"mt-5"}
          element={Array(2)
            .fill(["Hostel Name", "Room Name"])
            .map((_, i: number) => {
              return (
                <Ddown items={["Route", "Vehicle No"]} key={i} label={_[i]} />
              );
            })}
        />

        {/* previous school details */}
        <Heading
          h1={"Previous"}
          h2={"School"}
          h3={"Details"}
          className={"mt-5 mb-3"}
        />
        <Wrapper
          className={"mt-5"}
          element={Array(2)
            .fill(["School Name", "Qualification"])
            .map((_, i: number) => {
              return <Input key={i} placeholder={_[i]} />;
            })}
        />

        <Wrapper
          className={"mt-5"}
          element={Array(1)
            .fill(["Remarks"])
            .map((_, i: number) => {
              return <Textarea key={i} placeholder={_[i]} />;
            })}
        />
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button color="success" className="text-white">
          save
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AdmissionForm;
