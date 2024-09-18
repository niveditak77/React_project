import React from "react";
import Lottie from "react-lottie";
import { CgClose } from "react-icons/cg";

import animation from "@/public/dash.json";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
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

function Product(props: any) {
  const [selectedKeys, setSelectedKeys] = React.useState("");
  const [rows, setRows] = React.useState([1]);

  const [page, setPage] = React.useState(1);
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
        <Tabs aria-label="Options" variant="underlined">
          <Tab key="photos" title={props.tabs[0]}>
            <Card>
              <CardHeader className="gap-3">
                {productHeader.map((_, i) => {
                  return (
                    <Button isIconOnly key={i} className="hover:bg-secondary">
                      {_}
                    </Button>
                  );
                })}
              </CardHeader>
              <CardBody>
                <Table
                  aria-label="Example static collection table"
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
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title={props.tabs[1]}>
            <Card>
              <CardBody className="items-center">
                <div className="w-11/12 md:w-2/5 grid gap-5 mt-5 mb-5">
                  {props.inputs.map((_: string, i: number) => {
                    return props.isDropdown[i] ? (
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
                    ) : (
                      <Input
                        key={_ + i}
                        type="text"
                        isRequired
                        label={_}
                        placeholder={"Enter " + _}
                      />
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
                            <TableRow>
                              {props.table2.map((_: string, i: number) => {
                                return (
                                  <TableCell
                                    key={_ + i}
                                    className={`${
                                      idx != 0 && i == props.table2.length - 1
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

                <div className="w-full flex flex-col mt-5 pr-5 items-end">
                  <Button color="success" className="">
                    save
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Product;
