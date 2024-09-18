import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { useTheme } from "next-themes";
import animation from "@/public/dash.json";
import { Chip, Image, Textarea } from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Calendar } from "primereact/calendar";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  Radio,
  Switch,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@nextui-org/react";
import {
  FaRegCopy,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaPrint,
  FaTableColumns,
} from "react-icons/fa6";
import FileDropper from "@/components/utils/file-drop";
import DatePicker from "@/components/utils/datepicker";
import TimePicker from "../utils/timepicker";
import { useModelContext } from "../routes";
import SalaryModal from "./salary-modal";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function GenricTabs(props: any) {
  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const [selectedKeys, setSelectedKeys] = React.useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [chipStates, setChipStates] = useState(
    props.chips ? Array(props.chips.length).fill(false) : ["false"]
  );

  const handleChipClick = (index: number) => {
    const newChipStates = [...chipStates];
    newChipStates[index] = !newChipStates[index];
    setChipStates(newChipStates);
  };

  const [rows, setRows] = React.useState([1]);
  const [dates, setDates] = React.useState<any>();
  const { theme, setTheme } = useTheme();
  const [page, setPage] = React.useState(1);
  const { open, setOpen } = useModelContext();
  const rowsPerPage = 4;

  // const pages = Math.ceil(users.length / rowsPerPage);

  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return users.slice(start, end);
  // }, [page, users]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const pay = [
    "Cash",
    "Card",
    "Cheque",
    "Bank Trasfer",
    "Other",
    "Paypal",
    "Stripe",
    "PayUMoney",
    "Razorypay",
  ];

  const productHeader = [
    <FaRegCopy size={20} />,
    <FaFileExcel size={20} />,
    <FaFileCsv size={20} />,
    <FaFilePdf size={20} />,
    <FaPrint size={20} />,
    <FaTableColumns size={20} />,
  ];

  return (
    <div className="">
      <div className="flex w-full flex-col">
        {props.tabs ? (
          <Tabs aria-label="Options" variant="underlined">
            {props.tabs[0] ? (
              <Tab key="photos" title={props.tabs[0]}>
                <div className="">
                  {props.showHeader ? (
                    <div className="flex gap-3 mb-5">
                      {productHeader.map((_, i) => {
                        return (
                          <Button
                            isIconOnly
                            key={i}
                            className="hover:bg-default text-white"
                            color="secondary"
                          >
                            {_}
                          </Button>
                        );
                      })}
                    </div>
                  ) : null}
                  {/* <CardBody className=""> */}
                  <Table
                    aria-label="Example static collection table"
                    className=""
                    bottomContent={
                      <div className="flex w-full justify-center">
                        <Pagination
                          isCompact
                          showControls
                          showShadow
                          color="secondary"
                          page={page}
                          total={2}
                          onChange={(page) => setPage(page)}
                        />
                      </div>
                    }
                  >
                    <TableHeader>
                      {props.table.map((_: any, i: number) => {
                        return <TableColumn key={_ + i}>{_}</TableColumn>;
                      })}
                    </TableHeader>
                    <TableBody>
                      {props.tableData.map((d: any, id: number) => {
                        return (
                          <TableRow key={d + id}>
                            {props.table.map((_: any, i: number) => {
                              return d.c1 == 404 ? (
                                <TableCell key={_ + i}>
                                  {d["c" + (i + 1)] !== "" &&
                                  d["c" + (i + 1)] !== 404
                                    ? d["c" + (i + 1)]
                                    : ""}
                                </TableCell>
                              ) : (
                                <TableCell key={_ + i}>
                                  {d["c" + (i + 1)]}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                  {/* </CardBody> */}
                </div>
              </Tab>
            ) : null}

            {props.tabs[1] ? (
              <Tab key="music" title={props.tabs[1]}>
                <Card>
                  <CardBody className="items-center">
                    <div className="w-11/12 md:w-2/5 grid gap-5 mt-5 mb-5">
                      {props.inputs.map((_: string, i: number) => {
                        return props.type[i] == 1 ? (
                          <Dropdown key={_ + i}>
                            <DropdownTrigger>
                              <Input
                                type="text"
                                isRequired
                                label={_}
                                placeholder={"select " + _}
                                value={selectedKeys}
                              />
                            </DropdownTrigger>
                            <DropdownMenu
                              aria-label="Single selection example"
                              variant="solid"
                              disallowEmptySelection
                              selectionMode="single"
                              selectedKeys={selectedKeys}
                            >
                              <DropdownItem
                                onClick={() => {
                                  setSelectedKeys("demo");
                                }}
                                key="demo"
                                className="bg-transparent"
                              >
                                Demo
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        ) : props.type[i] == 0 ? (
                          <Input
                            key={_ + i}
                            type="text"
                            isRequired
                            label={_}
                            placeholder={"Enter " + _}
                          />
                        ) : props.type[i] == 3 ? (
                          <FileDropper label={_} />
                        ) : props.type[i] == 2 ? (
                          <div className="flex flex-row justify-between">
                            <h1>{_}</h1>
                            <Switch />
                          </div>
                        ) : props.type[i] == 4 ? (
                          <DatePicker label={_} />
                        ) : props.type[i] == 5 ? (
                          <Textarea label={_} isRequired />
                        ) : props.type[i] == 6 ? (
                          <TimePicker />
                        ) : props.type[i] == 7 ? (
                          <Calendar
                            value={dates}
                            onChange={(e) => setDates(e.value)}
                            selectionMode="range"
                            readOnlyInput
                            // inline
                            showIcon
                            className="rounded-lg h-12 bg-success"
                          />
                        ) : (
                          <div className="grid grid-cols-2 gap-1 select-none cursor-pointer">
                            {props.chips.map((_: any, i: number) => {
                              return (
                                <Chip
                                  key={i}
                                  color={chipStates[i] ? "primary" : "default"}
                                  onClick={() => handleChipClick(i)}
                                >
                                  {_}
                                </Chip>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    {props.hasLayout ? (
                      <>
                        <Table aria-label="Example static collection table">
                          <TableHeader>
                            {props.table2.map((_: string, i: number) => {
                              return <TableColumn key={_ + i}>{_}</TableColumn>;
                            })}
                          </TableHeader>
                          <TableBody>
                            {rows.map((_, idx) => {
                              return (
                                <TableRow key={_ + idx}>
                                  {props.table2.map((_: string, i: number) => {
                                    return (
                                      <TableCell
                                        className={`${
                                          idx != 0 &&
                                          i == props.table2.length - 1
                                            ? "flex flex-row gap-2 items-center"
                                            : ""
                                        }`}
                                      >
                                        {props.table2Dropdown[i] ? (
                                          <Dropdown key={_ + i} className="">
                                            <DropdownTrigger>
                                              <Input
                                                type="text"
                                                // label={"select"}
                                                value={selectedKeys}
                                                className="w-64"
                                              />
                                            </DropdownTrigger>
                                            <DropdownMenu
                                              aria-label="Single selection example"
                                              variant="solid"
                                              disallowEmptySelection
                                              selectionMode="single"
                                              selectedKeys={selectedKeys}
                                            >
                                              <DropdownItem
                                                onClick={() => {
                                                  setSelectedKeys("demo");
                                                }}
                                                key="demo"
                                                className="bg-transparent"
                                              >
                                                Demo
                                              </DropdownItem>
                                              <DropdownItem
                                                onClick={() => {
                                                  setSelectedKeys("sample");
                                                }}
                                                key="demo"
                                                className="bg-transparent"
                                              >
                                                Sample
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </Dropdown>
                                        ) : (
                                          <Input />
                                        )}

                                        {idx != 0 &&
                                        i == props.table2.length - 1 ? (
                                          <Button
                                            color="danger"
                                            isIconOnly
                                            onClick={() => {
                                              const updatedRows = rows.filter(
                                                (_, index) => index !== 0
                                              );
                                              setRows(updatedRows);
                                            }}
                                          >
                                            <CgClose size={15} />
                                          </Button>
                                        ) : null}
                                      </TableCell>
                                    );
                                  })}
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                        <div className="grid grid-cols-5 w-full mt-2">
                          <div className="pl-7">
                            <Link
                              onClick={() => {
                                const newRow = rows.concat(rows.length + 1);
                                setRows(newRow);
                              }}
                              className="cursor-pointer"
                            >
                              add more
                            </Link>
                          </div>
                          <div className="col-span-3 pr-5 flex items-center justify-end text-sm">
                            Net Total:
                          </div>
                          <div className="pr-8">
                            <Input />
                          </div>
                        </div>
                      </>
                    ) : null}

                    {props.hasSummary ? (
                      <div className="grid grid-cols-5 w-full mt-12 mb-2 pr-5">
                        <div className="col-span-3"></div>
                        {/* <div className="col-span-3 pr-5 flex items-center justify-end text-sm bg-red-200">
                      Net Total:
                    </div> */}
                        <Card className="col-span-5 md:col-span-2  flex items-center justify-end text-sm ">
                          <CardHeader>Bill Summary</CardHeader>
                          <CardBody className="w-full">
                            <hr className="h-px mb-5  bg-gray-500 border-2 rounded-lg dark:bg-gray-500" />
                            <div className="grid gap-2">
                              {props.summaryInputs.map((_: any, i: number) => {
                                return (
                                  <div
                                    key={_ + i}
                                    className="grid grid-cols-2 items-center gap-5"
                                  >
                                    <h1>{_}</h1>
                                    {props.summaryDropdowns[i] == 1 ? (
                                      <Dropdown key={_ + i}>
                                        <DropdownTrigger>
                                          <Input
                                            type="text"
                                            isRequired
                                            label={_}
                                            placeholder={"select " + _}
                                            value={selectedKeys}
                                          />
                                        </DropdownTrigger>
                                        <DropdownMenu
                                          aria-label="Single selection example"
                                          variant="solid"
                                          disallowEmptySelection
                                          selectionMode="single"
                                          selectedKeys={selectedKeys}
                                        >
                                          {pay.map((_, i) => {
                                            return (
                                              <DropdownItem
                                                onClick={() => {
                                                  setSelectedKeys(_);
                                                }}
                                                key={_ + i}
                                                className="bg-transparent"
                                              >
                                                {_}
                                              </DropdownItem>
                                            );
                                          })}
                                        </DropdownMenu>
                                      </Dropdown>
                                    ) : (
                                      <Input
                                        type="text"
                                        isRequired
                                        label={_}
                                        placeholder={""}
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    ) : null}

                    {props.hasSalary ? <SalaryModal /> : null}

                    <div className="flex flex-col mt-5 pr-5 items-end">
                      <Button color="success" className="">
                        save
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            ) : null}
          </Tabs>
        ) : null}
      </div>

      {/* modal */}
      <>
        <Modal
          isOpen={open}
          onOpenChange={onOpenChange}
          hideCloseButton
          size="5xl"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {props.modalTitle}
                </ModalHeader>
                <ModalBody>
                  {props.ModalContent ? (
                    <>
                      <div className="flex flex-col pb-5">
                        <div className="flex flex-row items-center justify-between">
                          <h1>Branch</h1>
                          <h1>Dedtech Demo</h1>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <h1>Salary Grade (GPA)</h1>
                          <h1>a</h1>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <h1>Overtime Rate (Per Hour)</h1>
                          <h1>$0.00</h1>
                        </div>
                      </div>
                      {props.ModalContent}
                    </>
                  ) : (
                    <>
                      <Image src={props.modalSrc[0]} />
                      {props.modalSrc[1] ? (
                        <Image src={props.modalSrc[1]} />
                      ) : null}
                    </>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="solid"
                    onPress={() => {
                      onClose();
                      setOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default GenricTabs;
