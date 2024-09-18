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
import Category from "./category";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function TwoTabs(props: any) {
  return (
    <div className="">
      <div className="flex w-full flex-col">
        {props.tabs ? (
          <Tabs aria-label="Options" variant="underlined">
            {props.tabs[0] ? (
              <Tab key="photos" title={props.tabs[0]}>
                <div className="">
                  <Category
                    iphead={props.iphead1}
                    tablehead={props.tablehead1}
                    inputs={props.inputs1}
                    table={props.table1}
                    tabledata={props.tabledata1}
                    type={props.iptype1}
                  />
                </div>
              </Tab>
            ) : null}

            {props.tabs[1] ? (
              <Tab key="sdsdsd" title={props.tabs[1]}>
                <Category
                  iphead={props.iphead2}
                  tablehead={props.tablehead2}
                  inputs={props.inputs2}
                  table={props.table2}
                  tabledata={props.tabledata2}
                  type={props.iptype2}
                />
              </Tab>
            ) : null}
          </Tabs>
        ) : null}
      </div>
    </div>
  );
}

export default TwoTabs;
