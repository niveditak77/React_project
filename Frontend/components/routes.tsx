import { rContext } from "@/app/dashboard/page";
import React, { useRef, useState, useContext, createContext } from "react";
import GenricTabs from "./dropdowns/genric-tabs";
import Dashboard from "./dropdowns/dashboard";
import Product from "./dropdowns/product";
import Category from "./dropdowns/category";
import Form from "./dropdowns/form";
import PageSection from "./dropdowns/page-section";
import { IoMusicalNotes } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa6";
import { BiCodeAlt } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Calendar } from "primereact/calendar";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Input,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import AdmissionEnquiry from "./dropdowns/admission-enquiry";
import TabsCat from "./dropdowns/tabs-cat";
import AdmissionForm from "./dropdowns/admission-form";
import Ddown from "./utils/dropdown";
import MultipleImport from "./dropdowns/multiple-import";
import StudentDetails from "./dropdowns/student-details";
import OneTable from "./dropdowns/onetable";
import ParentForm from "./dropdowns/parentform";
import MTabs from "./dropdowns/mtabs";
import EmployeeForm from "./dropdowns/employee-form";
import SalaryModal from "./dropdowns/salary-modal";
import FileDropper from "./utils/file-drop";
import TwoTabs from "./dropdowns/twotabs";

const modelContext = createContext<any>(0);
const salaryModelContext = createContext<any>(0);

export default function Routes() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [dates, setDates] = React.useState<any>();
  const { selected, setSelected } = rContext();
  return (
    <>
      {selected == "Dashboard" ? <Dashboard /> : ""}
      {selected == "i.product" ? (
        <Product
          table={[
            "Sl",
            "Name",
            "Code",
            "Category",
            "Purchase Unit",
            "Sale Unit",
            "Unit Ratio",
            "Purchase Price",
            "Sales Price",
            "Remarks",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
              c8: "demo",
              c9: "demo",
              c10: "demo",
              c11: "demo",
            },
          ]}
          tabs={["Product List", "Create Product"]}
          inputs={[
            "Product Name",
            "Product Code",
            "Product Category",
            "Purchase Unit",
            "Sales Unit",
            "Unit Ratio",
            "Purchase Price",
            "Sales Price",
            "Remarks",
          ]}
          isDropdown={[0, 0, 1, 1, 1, 0, 0, 0, 0]}
        />
      ) : (
        ""
      )}
      {selected == "i.category" ? (
        <Category
          iphead={"Add Category"}
          tablehead={"Category List"}
          inputs={["Category Name"]}
          type={[0]}
          table={["Sl", "Branch", "Name", "Action"]}
          tabledata={[
            { c1: "1", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "2", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "3", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "4", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "5", c2: "Dedtech Demo", c3: "Demo", c4: "" },
          ]}
        />
      ) : (
        ""
      )}
      {selected == "i.store" ? (
        <Product
          table={[
            "Sl",
            "Store Name",
            "Store Code",
            "Mobile No",
            "Address",
            "Description",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
            },
          ]}
          tabs={["Store List", "Create Store"]}
          inputs={[
            "Store Name",
            "Store Code",
            "Mobile No",
            "Address",
            "Description",
          ]}
          isDropdown={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        />
      ) : (
        ""
      )}
      {selected == "i.supplier" ? (
        <Product
          table={[
            "Sl",
            "Supplier Name",
            "Address",
            "Contact Number",
            "Email",
            "Company Name",
            "Product List",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
              c8: "demo",
            },
          ]}
          tabs={["Supplier List", "Create Supplier"]}
          inputs={[
            "Supplier Name",
            "Contact Number",
            "Email",
            "Company Name",
            "Product List",
            "Address",
          ]}
          isDropdown={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        />
      ) : (
        ""
      )}
      {selected == "i.unit" ? (
        <Category
          iphead={"Add Unit"}
          tablehead={"Unit List"}
          inputs={["Unit Name"]}
          type={[0]}
          table={["Sl", "Branch", "Name", "Action"]}
          tabledata={[
            { c1: "1", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "2", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "3", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "4", c2: "Dedtech Demo", c3: "Demo", c4: "" },
            { c1: "5", c2: "Dedtech Demo", c3: "Demo", c4: "" },
          ]}
        />
      ) : (
        ""
      )}

      {selected == "i.purchase" ? (
        <Product
          table={[
            "Bill No",
            "Supplier Name",
            "Purchase Status",
            "Payment Status",
            "Purchase Date",
            "Net Payable",
            "Paid",
            "Due",
            "Remarks",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
              c8: "demo",
              c9: "demo",
              c10: "demo",
            },
          ]}
          table2={[
            "Product",
            "Unit Price",
            "Quantity",
            "Discount",
            "Total Price",
          ]}
          tabs={["Purchase List", "Add Purchase"]}
          inputs={[
            "Supplier",
            "Store",
            "Bill No",
            "Purchase Status",
            "Date",
            "Remarks",
          ]}
          isDropdown={[1, 1, 0, 1, 0, 0]}
          table2Dropdown={[1, 0, 0, 0]}
          hasLayout={true}
        />
      ) : (
        ""
      )}
      {selected == "i.sales" ? (
        <Product
          table={[
            "Sl",
            "Bill No",
            "Role",
            "Sale To",
            "Payment Status",
            "Date",
            "Net Payable",
            "Paid",
            "Due",
            "Remarks",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
              c8: "demo",
              c9: "demo",
              c10: "demo",
              c11: "demo",
            },
          ]}
          table2={[
            "Category",
            "Product",
            "Unit Price",
            "Quantity",
            "Discount",
            "Total Price",
          ]}
          tabs={["Sales List", "Add  Sales"]}
          inputs={["Role", "Sale To", "Bill No", "Date"]}
          isDropdown={[1, 1, 0, 0]}
          hasLayout={true}
          hasSummary={true}
          summaryInputs={[
            "Subtotal",
            "Discount(-)",
            "Net Payable",
            "Received Amount",
            "Pay Via",
            "Remarks",
          ]}
          summaryDropdowns={[0, 0, 0, 0, 1, 0]}
          table2Dropdown={[1, 1, 0, 0, 0, 0]}
        />
      ) : (
        ""
      )}
      {selected == "i.issue" ? (
        <Product
          table={[
            "Sl",
            "Role",
            "Issue To",
            "Mobile No",
            "Date of Issue",
            "Due Date",
            "Return Date",
            "Issued By",
            "Action",
          ]}
          tableData={[
            {
              c1: 1,
              c2: "demo",
              c3: "demo",
              c4: "demo",
              c5: "demo",
              c6: "demo",
              c7: "demo",
              c8: "demo",
              c9: "demo",
            },
          ]}
          table2={["Category", "Product", "Quantity"]}
          tabs={["Issue List", "Add  Issue"]}
          inputs={["Role", "Sale To", "Date of Issue", "Due Date", "Remark"]}
          isDropdown={[1, 1, 0, 0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={true}
        />
      ) : (
        ""
      )}
      {selected == "f.setting" ? <Form /> : ""}
      {selected == "f.menu" ? (
        <GenricTabs
          table={[
            "Sl",
            "Menu Type",
            "Title",
            "Position",
            "Submenu",
            "Publish",
            "Action",
          ]}
          hasSwitch={true}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: "System Menu",
              c3: "Home",
              c4: 1,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 2,
              c2: "System Menu",
              c3: "Teacher",
              c4: 2,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: false,
            },
            {
              c1: 3,
              c2: "Has Been Added	",
              c3: "Product",
              c4: 2,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 4,
              c2: "System Menu",
              c3: "Events",
              c4: 3,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 5,
              c2: "System Menu",
              c3: "About Us",
              c4: 4,
              c5: "No",
              c6: <Switch color="success" defaultSelected={false} />,
              c7: "",
              isChecked: false,
            },
            {
              c1: 6,
              c2: "Has Been Added",
              c3: "About Us",
              c4: 4,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 7,
              c2: "System Menu",
              c3: "Faq",
              c4: 5,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 8,
              c2: "System Menu",
              c3: "Online Admission",
              c4: 6,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 9,
              c2: "Has Been Added",
              c3: "Connect Us",
              c4: 6,
              c5: "No",
              c6: <Switch color="success" defaultSelected={false} />,
              c7: "",
              isChecked: false,
            },
            {
              c1: 10,
              c2: "System Menu",
              c3: "Gallery",
              c4: 7,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 11,
              c2: "System Menu",
              c3: "Pages",
              c4: 8,
              c5: "Yes",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
              isChecked: true,
            },
            {
              c1: 404,
              c2: "",
              c3: "",
              c4: "",
              c5: "Admit Card",
              c6: <Switch color="success" defaultSelected={false} />,
              c7: "",
            },
            {
              c1: 404,
              c2: "",
              c3: "",
              c4: "",
              c5: "Exam Results",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
            },
            {
              c1: 404,
              c2: "",
              c3: "",
              c4: "",
              c5: "Certificates",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
            },
            {
              c1: 12,
              c2: "System Menu",
              c3: "Contact Us",
              c4: 9,
              c5: "No",
              c6: <Switch color="success" defaultSelected={true} />,
              c7: "",
            },
          ]}
          tabs={["Menu List", "Add  Menu"]}
          inputs={[
            "Title",
            "Position",
            "Publish",
            "Target New Window",
            "External URl",
            "External Link",
            "Parent Menu",
          ]}
          type={[0, 0, 2, 2, 2, 0, 1]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}

      {selected == "f.pagesection" ? (
        <PageSection
          mainTabList={[
            "Home",
            "Teachers",
            "Events",
            "About Us",
            "FAQ",
            "Online Admission",
            "Gallery",
            "Contact Us",
            "Admit Card",
            "Exam Results",
            "Certificates",
          ]}
          sublist={[
            {
              tabs: [
                "Welcome Message",
                "Teachers",
                "Testimonials",
                "Services",
                "Statistics",
                "Call To Action ",
                "Options",
              ],
              inputs: [
                {
                  i0: [
                    "Title",
                    "Subtitle",
                    "Description",
                    "Photo",
                    "Title Text Color",
                    "Show Website",
                  ],
                  type: [0, 0, 0, 3, 1, 2],
                },
                {
                  i1: [
                    "Title",
                    "Start No Of Teacher",
                    "Description",
                    "Photo",
                    "Title Text Color",
                    "Description Text Color",
                    "Show Website",
                  ],
                  type: [0, 0, 0, 3, 1, 1, 2],
                },
                {
                  i2: ["Title", "Description", "Show Website"],
                  type: [0, 0, 2],
                },
                {
                  i3: [
                    "Title",
                    "Description",
                    "Title Text Color",
                    "Background Color",
                    "Show Website",
                  ],
                  type: [0, 0, 1, 1, 2],
                },
                {
                  i4: [
                    "Title",
                    "Description",
                    "Photo",
                    "Title Text Color",
                    "Description Text Color",
                  ],
                  type: [0, 0, 3, 1, 1],
                  hasWidgets: true,
                },
                {
                  i5: [
                    "Cta Title",
                    "Mobile Number",
                    "Button Text",
                    "Button URL",
                    "Background Color",
                    "Text Color",
                    "Show Website",
                  ],
                  type: [0, 0, 0, 0, 1, 1, 2],
                },
                {
                  i6: ["Page Title", "Meta Keyword", "Meta Description"],
                  type: [0, 0, 0],
                },
              ],
            },
            {
              tabs: [],
              inputs: [
                "Page Title",
                "Banner Photo",
                "Meta Keyword",
                "Meta Description",
              ],
              type: [0, 1, 0, 0],
            },
            {
              tabs: ["Events", "Options"],
              inputs: [
                {
                  i0: ["Title", "Description"],
                  type: [0, 0],
                },
                {
                  i1: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
              ],
            },
            {
              tabs: ["About", "Service", "Call To Action Section", "Options"],
              inputs: [
                {
                  i0: ["Title", "Subtitle", "Content", "About Photo"],
                  type: [0, 0, 0, 3],
                },
                {
                  i1: ["Title", "Subtitle", "Parallax Photo"],
                  type: [0, 0, 3],
                },
                {
                  i2: ["Cta Title", "Button Text", "Button URL"],
                  type: [0, 0, 0],
                },
                {
                  i3: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
              ],
            },
            {
              tabs: ["Faq", "Options"],
              inputs: [
                {
                  i0: ["Title", "Description"],
                  type: [0, 0],
                },
                {
                  i1: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
              ],
            },
            {
              tabs: ["Admission", "Field Setting", "Options"],
              inputs: [
                {
                  i0: [
                    "Title",
                    "Description",
                    "Terms Conditions Title",
                    "Terms Conditions Description",
                  ],
                  type: [0, 0, 0, 0],
                },
                {
                  i1: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
                {
                  i2: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
              ],
            },
            {
              tabs: [],
              inputs: [
                "Gallery",
                "Banner Photo",
                "Meta Keyword",
                "Meta Description",
              ],
              type: [0, 1, 0, 0],
            },

            {
              tabs: ["Contact", "Options"],
              inputs: [
                {
                  i0: [
                    "Box Title",
                    "Box Description",
                    "Box Photo",
                    "Form Title",
                    "Address",
                    "Phone",
                    "Email",
                    "Submit Button Text",
                    "Map iframe",
                  ],
                  type: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  i1: [
                    "Page Title",
                    "Banner Photo",
                    "Meta Keyword",
                    "Meta Description",
                  ],
                  type: [0, 3, 0, 0],
                },
              ],
            },
            {
              tabs: [],
              inputs: [
                "Page Title",
                "Default Template",
                "Description",
                "Banner Photo",
                "Meta Keyword",
                "Meta Description",
              ],
              type: [0, 0, 0, 1, 0, 0],
            },
            {
              tabs: [],
              inputs: [
                "Page Title",
                "Default Template",
                "Description",
                "Banner Photo",
                "Meta Keyword",
                "Meta Description",
                "Print Attendence",
                "Print Grade Scale",
              ],
              type: [0, 0, 0, 1, 0, 0, 2, 2],
            },
            {
              tabs: [],
              inputs: [
                "Page Title",
                "Default Template",
                "Description",
                "Banner Photo",
                "Meta Keyword",
                "Meta Description",
              ],
              type: [0, 0, 0, 1, 0, 0],
            },
          ]}
        />
      ) : (
        ""
      )}

      {selected == "f.managepage" ? (
        <GenricTabs
          table={["Sl", "Page Title", "Menu Title", "URL", "Action"]}
          table2={[]}
          hasSwitch={false}
          tableData={[
            {
              c1: 1,
              c2: "About",
              c3: "About Us",
              c4: "https://phpstack-1188308-4181836.cloudwaysapps.com/product_demo/page/about-us",
            },
            {
              c1: 2,
              c2: "Product",
              c3: "Product",
              c4: "https://phpstack-1188308-4181836.cloudwaysapps.com/product_demo/page/product",
            },
          ]}
          tabs={["Page List", "Add  Page"]}
          inputs={[
            "Page Title",
            "Select Menu",
            "Content",
            "Banner Photo",
            "Meta Keyword",
            "Meta Description",
          ]}
          type={[0, 1, 0, 3, 0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}
      {selected == "f.slider" ? (
        <GenricTabs
          table={[
            "Sl",
            "Photo",
            "Title",
            "Button Text 1",
            "Button URL 1",
            "Button Text 2",
            "Button URL 2",
            "Position",
            "Action",
          ]}
          hasSwitch={false}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: (
                <Image
                  width={100}
                  height={100}
                  src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/frontend/slider/home-slider-1704176103.jpg"
                />
              ),
              c3: "Elevate Your Learning Experience- Drighna EdTech, Your Partner in Educational Journey!",
              c4: "View Services",
              c5: "drighna.com",
              c6: "Learn More",
              c7: "phpstack-1188308-4181836.cloudwaysapps.com",
              c8: "Left",
              c9: "",
            },
            {
              c1: 2,
              c2: (
                <Image
                  width={100}
                  height={100}
                  src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/frontend/slider/home-slider-1704176195.jpg"
                />
              ),
              c3: "	Online Live Class Facility",
              c4: "Read More",
              c5: "#",
              c6: "Get Started",
              c7: "#",
              c8: "Left",
              c9: "",
            },
          ]}
          tabs={["Page List", "Add  Page"]}
          inputs={[
            "Page Title",
            "Select Menu",
            "Content",
            "Banner Photo",
            "Meta Keyword",
            "Meta Description",
          ]}
          type={[0, 1, 0, 3, 0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}

      {selected == "f.features" ? (
        <GenricTabs
          table={[
            "Sl",
            "Icon",
            "Title",
            "Button Text",
            "Button URL",
            "Description",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Feature List", "Add  Feature"]}
          inputs={["Title", "Button Text", "Button URL", "Icon", "Description"]}
          type={[0, 0, 0, 0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}
      {selected == "f.testimonial" ? (
        <GenricTabs
          table={[
            "Sl",
            "Photo",
            "Name",
            "Surname",
            "Description",
            "Rank",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Testimonial List", "Add  Testimonial"]}
          inputs={["Name", "Surname", "Rank", "Description", "Photo"]}
          type={[0, 0, 1, 0, 3]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}
      {selected == "f.service" ? (
        <GenricTabs
          table={["Sl", "Icon", "Title", "Description", "Action"]}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: <IoMusicalNotes size={40} />,
              c3: "Online Course Facilities",
              c4: "Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
            },
            {
              c1: 2,
              c2: <FaBookOpen size={40} />,
              c3: "Modern Book Library",
              c4: "Making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.	",
            },
            {
              c1: 3,
              c2: <FaIndustry size={40} />,
              c3: "Be Industrial Leader",
              c4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.	",
            },
            {
              c1: 4,
              c2: <BiCodeAlt size={40} />,
              c3: "Programming Courses	",
              c4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.	",
            },
            {
              c1: 5,
              c2: <FaLanguage size={40} />,
              c3: "Foreign Languages",
              c4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.	",
            },
            {
              c1: 6,
              c2: <FaUserGraduate size={40} />,
              c3: "Alumni Directory",
              c4: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.	",
            },
          ]}
          tabs={["Service List", "Add  Service"]}
          inputs={["Title", "Icon", "Description"]}
          type={[0, 0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}
      {selected == "f.faq" ? (
        <GenricTabs
          table={["Sl", "Title", "Action"]}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: "What features does DrighnaEdTech's school management system offer?	",
            },
            {
              c1: 2,
              c2: "Is DrighnaEdTech compatible with different types of educational institutions?	",
            },
            {
              c1: 3,
              c2: "How does DrighnaEdTech ensure data security and privacy?	",
            },
            {
              c1: 4,
              c2: "Can DrighnaEdTech's system be integrated with other existing school software or platforms?",
            },
            {
              c1: 5,
              c2: "What kind of support and training does DrighnaEdTech provide for users?",
            },
          ]}
          tabs={["Faq List", "Add  Faq"]}
          inputs={["Title", "Description"]}
          type={[0, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}

      {selected == "f.gallerycategory" ? (
        <Category
          iphead={"Add Category"}
          tablehead={"Category List"}
          inputs={["Category Name"]}
          type={[0]}
          table={["Name", "Action"]}
          tabledata={[
            { c1: "Science", c2: "" },
            { c1: "Seminars", c2: "" },
            { c1: "Scholarships", c2: "" },
            { c1: "Celebrations", c2: "" },
            { c1: "Seminars", c2: "" },
          ]}
        />
      ) : (
        ""
      )}

      {selected == "f.gallery" ? (
        <GenricTabs
          table={[
            "Sl",
            "Thumb Image",
            "Gallery Title",
            "Category",
            "Description",
            "Uploaded",
            "Show Website",
            "Action",
          ]}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: (
                <Image
                  height={100}
                  width={100}
                  src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/frontend/gallery/gallery-1704694409.png"
                />
              ),
              c3: "Scholarships",
              c4: "Scholarships",
              c5: "Demo",
              c6: "0",
              c7: "",
              c8: (
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                >
                  <input ref={fileInputRef} type="file" className="hidden" />
                  <BiSolidImageAdd size={50} />
                </Button>
              ),
            },
            {
              c1: 2,
              c2: (
                <Image
                  height={100}
                  width={100}
                  src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/frontend/gallery/gallery-1704694597.png"
                />
              ),
              c3: "Celebrations",
              c4: "Celebrations",
              c5: "Demo",
              c6: "0",
              c7: "",
              c8: (
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                >
                  <input ref={fileInputRef} type="file" className="hidden" />
                  <BiSolidImageAdd size={50} />
                </Button>
              ),
            },
            {
              c1: 3,
              c2: (
                <Image
                  height={100}
                  width={100}
                  src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/frontend/gallery/gallery-1704694597.png"
                />
              ),
              c3: "sports",
              c4: "Sports",
              c5: "Demo",
              c6: "0",
              c7: "",
              c8: (
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={() => {
                    fileInputRef.current?.click();
                  }}
                >
                  <input ref={fileInputRef} type="file" className="hidden" />
                  <BiSolidImageAdd size={50} />
                </Button>
              ),
            },
          ]}
          tabs={["Gallery List", "Add  Gallery"]}
          inputs={[
            "Gallery Title",
            "Description",
            "Category",
            "Thumb Image",
            "Show Website",
          ]}
          type={[0, 0, 1, 3, 2]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
        />
      ) : (
        ""
      )}

      {selected == "r.admissionenquiry" ? (
        <GenricTabs
          table={[
            "Sl",
            "Name",
            "Mobile No",
            "Guardian",
            "Reference",
            "Enquiry Date",
            "Next Follow Up Date",
            "Status",
            "Action",
          ]}
          table2={[]}
          tableData={[
            {
              c1: 1,
              c2: "Demo",
              c3: "9392139283",
              c4: "Father Name : DEMO\nMother Name : DEMO",
              c5: "demo",
              c6: "30 Jan 2024",
              c7: "-",
              c8: (
                <Chip color="success" className="text-white" radius="sm">
                  active
                </Chip>
              ),
              c9: (
                <Button
                  isIconOnly
                  onClick={() => {
                    setSelected("Enquiry");
                  }}
                  className="bg-transparent"
                >
                  <IoIosArrowDropright size={50} />
                </Button>
              ),
            },
          ]}
          tabs={["Enquiry List", "Add  Enquiry"]}
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
      ) : (
        ""
      )}

      {selected == "Enquiry" ? (
        <AdmissionEnquiry
          enquiryDetails={[
            {
              i1: "Status",
              i2: (
                <Chip color="success" className="text-white">
                  active
                </Chip>
              ),
            },
            { i1: "Enquiry Date", i2: "2024-12-12" },
            { i1: "Name", i2: "Demo" },
            { i1: "Gender", i2: "Female" },
            { i1: "Class Applying For", i2: "Demo" },
            { i1: "Father Name", i2: "Demo" },
            { i1: "Mother Name", i2: "Demo" },
            { i1: "Mobile No", i2: "9889785673479" },
            { i1: "Email", i2: "N/A" },
            { i1: "No of Child", i2: "1" },
            { i1: "Enquiry Reference", i2: "N/A" },
            { i1: "Note", i2: "N/A" },
            { i1: "Previous School", i2: "N/A" },
            { i1: "Assigned", i2: "N/A" },
            { i1: "Created By", i2: "N/A" },
          ]}
        />
      ) : null}

      {selected == "r.postalrecord" ? (
        <GenricTabs
          table={[
            "Sl",
            "Type",
            "Sender Title",
            "Receiver Title",
            "Date",
            "Confidential",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Postal Record List", "Add Postal Record"]}
          inputs={[
            "Type",
            "Reference No",
            "Sender Title",
            "Receiver Title",
            "Address",
            "Note",
            "Date",
            "Document",
            "Confidential",
          ]}
          type={[1, 0, 0, 0, 5, 5, 4, 3, 2]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "r.calllog" ? (
        <GenricTabs
          table={[
            "Sl",
            "Name",
            "Mobile No",
            "Calling Purpose",
            "Call Type",
            "Date",
            "Start Time",
            "End Time",
            "Follow Up",
            "Duration",
            "Note",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Call Log List", "Add Call Log"]}
          inputs={[
            "Call Type",
            "Calling Purpose",
            "Name",
            "Mobile No",
            "Date",
            "Time Slot",
            "Follow Up Date",
            "Note",
          ]}
          type={[1, 1, 0, 0, 4, 6, 4, 5]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "r.visitorlog" ? (
        <GenricTabs
          table={[
            "Sl",
            "Name",
            "Visiting Purpose",
            "Date",
            "Entry Time",
            "Exit Time",
            "Number Of Visitor",
            "Token/pass",
            "Note",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Visitor List", "Add Visitor"]}
          inputs={[
            "Visiting Purpose",
            "Name",
            "Mobile No",
            "Date",
            "Time Slot",
            "No Of Visitor",
            "Id No",
            "Token/Pass",
            "Note",
          ]}
          type={[1, 0, 0, 4, 6, 0, 0, 0, 5]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "r.complaint" ? (
        <GenricTabs
          table={[
            "Sl",
            "Complaint Type",
            "Complaint Name",
            "Mobile No",
            "Date",
            "Date of Solution",
            "Assign To",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Complaint List", "Add Complaint"]}
          inputs={[
            "Type",
            "Assign To",
            "Complaint Name",
            "Complaint Mobile No",
            "Note",
            "Date",
            "Document File",
          ]}
          type={[1, 1, 0, 0, 5, 4, 3]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}
      {selected == "r.configreception" ? (
        <TabsCat
          tabs={[
            "Reference",
            "Response",
            "Calling Purpose",
            "Visiting Purpose",
            "Complaint Type",
          ]}
          iphead={[
            "Add Reference",
            "Add Response",
            "Add Calling Purpose",
            "Add Visiting Purpose",
            "Complaint Type Visiting Purpose",
          ]}
          tablehead={[
            "Reference List",
            " Response List",
            " Calling Purpose List",
            " Visiting Purpose List",
            "Complaint Type List",
          ]}
          tabledata={[
            [{ c1: "Demo", c2: "Demo", c3: "Demo" }],
            [{ c1: "Demo", c2: "Demo", c3: "Demo" }],
            [{ c1: "Sl", c2: "Name", c3: "Action" }],
            [{ c1: "Demo", c2: "Demo", c3: "Demo" }],
            [{ c1: "Sl", c2: "Name", c3: "Action" }],
          ]}
          tables={[
            ["Sl", "Name", "Action"],
            ["Sl", "Name", "Action"],
            ["Sl", "Name", "Action"],
            ["Sl", "Name", "Action"],
            ["Sl", "Name", "Action"],
          ]}
        />
      ) : (
        ""
      )}
      {selected == "a.createadmission" ? (
        <AdmissionForm
          inputs={[["Academic Year", "Register No", "Roll", "Admission Date"]]}
        />
      ) : (
        ""
      )}
      {selected == "a.onlineadmission" ? (
        <Card>
          <CardHeader>Select Ground</CardHeader>
          <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
          <CardBody className="lg:px-56">
            <Ddown label={"Select Class"} items={["demo"]} />
          </CardBody>
        </Card>
      ) : (
        ""
      )}
      {selected == "a.multipleimport" ? <MultipleImport /> : ""}
      {selected == "a.category" ? (
        <Category
          iphead={"Add Category"}
          tablehead={"Category List"}
          inputs={["Category Name"]}
          type={[0]}
          table={["Branch", "Id", "Name", "Action"]}
          tabledata={[{ c1: "Dedtech Demo", c2: "1", c3: "Science", c4: "" }]}
        />
      ) : (
        ""
      )}
      {selected == "sd.studentlist" ? (
        <StudentDetails
          labels={["Class", "Section"]}
          items1={["demo"]}
          items2={["Select Section"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "sd.logindeactivate" ? (
        <StudentDetails
          labels={["Class", "Section"]}
          items1={["All Sections", "Demo"]}
          items2={["Select Section"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "sd.deactivatereason" ? (
        <Category
          iphead={"Add Deactivate Reason"}
          tablehead={"Reason List"}
          inputs={["Reason"]}
          type={[0]}
          table={["Branch", "Reason", "Action"]}
          tabledata={[]}
        />
      ) : (
        ""
      )}
      {selected == "pl.parentlist" ? (
        <OneTable
          header={"Parents List"}
          table={[
            "Sl",
            "Guardian Name",
            "Occupation",
            "Mobile No",
            "Email",
            "Action",
          ]}
          tableData={[
            {
              c1: "1",
              c2: "demo_parents",
              c3: "demo",
              c4: "1233",
              c5: "parents@gmail.com",
            },
          ]}
          selectionMode="single"
          hasFooter={false}
        />
      ) : (
        ""
      )}
      {selected == "pl.addparent" ? <ParentForm /> : ""}
      {selected == "pl.logindeactivate" ? (
        <OneTable
          header={"Login Deactivate"}
          table={[
            "Guardian Name",
            "Occupation",
            "Mobile No",
            "Email",
            "Action",
          ]}
          tableData={[
            {
              c1: "1",
              c2: "demo_parents",
              c3: "demo",
              c4: "1233",
              c5: "parents@gmail.com",
            },
          ]}
          selectionMode="multiple"
          hasFooter={true}
        />
      ) : (
        ""
      )}
      {selected == "ep.employeelist" ? (
        <MTabs
          tabs={[
            "Edudrighna Admin",
            "Dedtech Teacher",
            "Accountant",
            "Librarian",
            "Receptionist",
            "Drighnaedtech",
            "Demo2024",
          ]}
          table={Array(10).fill({
            c1: "Sl",
            c2: "Photo",
            c3: "Branch",
            c4: "Staff Id",
            c5: "Name",
            c6: "Designation",
            c7: "Department",
            c8: "Email",
            c9: "Mobile No",
            c10: "Action",
          })}
          tableData={[
            [
              {
                c1: "",
                c2: "",
                c3: "",
                c4: "",
                c5: "",
                c6: "",
                c7: "",
                c8: "",
                c9: "",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/images/staff/189965295c35367d18a787231d555188.png"
                  />
                ),
                c3: "Dedtech Demo	",
                c4: "7d91ca7	",
                c5: "Demoteacher	",
                c6: "Demo	",
                c7: "Demo	",
                c8: "dteacher@gmail.com",
                c9: "876543456",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "3c583a7",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
              {
                c1: "2",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "3c583a7",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "693c2ff",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
              {
                c1: "2",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "13cf84c",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "693c2ff",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "693c2ff",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
            ],
            [
              {
                c1: "1",
                c2: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/app_image/defualt.png"
                  />
                ),
                c3: "Dedtech Demo",
                c4: "693c2ff",
                c5: "demo_accountant",
                c6: "Demo",
                c7: "Demo",
                c8: "demo@gmail.com",
                c9: "1234",
                c10: "",
              },
            ],
          ]}
        />
      ) : (
        ""
      )}
      {selected == "ep.adddepartment" ? (
        <Category
          iphead={"Add Department"}
          tablehead={"Department List"}
          inputs={["Department Name"]}
          type={[0]}
          table={["Sl", "Branch", "Name", "Action"]}
          tabledata={[]}
        />
      ) : (
        ""
      )}
      {selected == "ep.adddesignation" ? (
        <Category
          iphead={"Add Designation"}
          tablehead={"Designation List"}
          inputs={["Designation Name"]}
          type={[0]}
          table={["Sl", "Branch", "Name", "Action"]}
          tabledata={[{ c1: "name", c2: "Dedtech Demo", c3: "Demo", c4: "" }]}
        />
      ) : (
        ""
      )}

      {selected == "ep.addemployee" ? <EmployeeForm /> : ""}

      {selected == "ep.logindeactivate" ? (
        <Card>
          <CardHeader>Select Ground</CardHeader>
          <hr className="h-px rounded-fill w-full bg-gray-200  dark:bg-gray-700" />
          <CardBody className="lg:px-56">
            <Ddown
              label={"Select Role"}
              items={[
                "Edudrighna Admin",
                "Dedtech Teacher",
                "Accountant",
                "Librarian",
              ]}
            />
          </CardBody>
        </Card>
      ) : (
        ""
      )}

      {selected == "cm.idcardtemplate" ? (
        <modelContext.Provider value={{ open, setOpen }}>
          <GenricTabs
            modalTitle={"Id Card View"}
            modalSrc={[
              "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1707114249/drighna/ramom/1_coad5x.png",
              "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1707114249/drighna/ramom/2_pccnik.png",
            ]}
            table={[
              "Sl",
              "Name",
              "Applicable User",
              "Page Layout",
              "Background Image",
              "Created At",
              "Action",
            ]}
            table2={[]}
            tableData={[
              {
                c1: "1",
                c2: "Dedtech Teacher",
                c3: "Employee",
                c4: "Width 100mm x Height 100mm",
                c5: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/language_flags/defualt.png"
                  />
                ),
                c6: "04.Jan.2024",
                c7: (
                  <RxHamburgerMenu
                    size={20}
                    className="hover:text-success cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),
              },
              {
                c1: "2",
                c2: "Dedtech",
                c3: "Student",
                c4: "Width 100mm x Height 100mm",
                c5: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/language_flags/defualt.png"
                  />
                ),
                c6: "04.Jan.2024",
                c7: (
                  <RxHamburgerMenu
                    size={20}
                    className="hover:text-success cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),
              },
              {
                c1: "3",
                c2: "accountant",
                c3: "Employee	",
                c4: "Width 100mm x Height 100mm",
                c5: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/language_flags/defualt.png"
                  />
                ),
                c6: "07.Jan.2024",
                c7: (
                  <RxHamburgerMenu
                    size={20}
                    className="hover:text-success cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),
              },
            ]}
            tabs={["Id Card List", "Add Id Card"]}
            inputs={[
              "Id Card Name",
              "Applicable User",
              "Page Layout Width mm",
              "Page Layout Height mm",
              "User Photo Style",
              "Photo Size",
              "Layout Spacing Top",
              "Layout Spacing Bottom",
              "Layout Spacing Left",
              "Layout Spacing Right",
              "Signature Image",
              "Logo Image",
              "Background Image",
              "Certificate Content",
            ]}
            type={[0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 3, 3, 5]}
            table2Dropdown={[1, 1, 0]}
            hasLayout={false}
            showHeader={true}
          />
        </modelContext.Provider>
      ) : (
        ""
      )}

      {selected == "cm.studentidcard" ? (
        <StudentDetails
          labels={["Class", "Section", "Template"]}
          items1={["Demo"]}
          items2={["Select Class First"]}
          items3={["Dedtech", "Dedtech"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "cm.employeeidcard" ? (
        <StudentDetails
          labels={["Role", "Template"]}
          items1={[
            "EduDrighna Admin",
            "Dedtech Teacher",
            "Accountant",
            "Librarian",
            "Receptionist",
            "DrighnaEdtech",
            "Demo2024",
          ]}
          items2={["Dedtech Teacher", "Accountant"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}

      {selected == "cm.admitcardtemplate" ? (
        <GenricTabs
          table={[
            "Sl",
            "Admit Card Name",
            "Page Layout",
            "Background Image",
            "Created At",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          tabs={["Admit Card List", "Add Admit Card"]}
          inputs={[
            "Admit Card Name",
            "Applicable User",
            "Page Layout Width mm",
            "Page Layout Height mm",
            "QR Code Text",
            "User Photo Style",
            "Photo Size",
            "Layout Spacing Top",
            "Layout Spacing Bottom",
            "Layout Spacing Left",
            "Layout Spacing Right",
            "Signature Image",
            "Logo Image",
            "Background Image",
            "Certificate Content",
            "tags",
          ]}
          type={[0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 5, 7]}
          chips={[
            "name",
            "gender",
            "father name",
            "mother name",
            "student photo",
            "register no",
            "roll",
            "admission date",
            "class",
            "section",
            "category",
            "caste",
            "exam name",
            "subject list table",
            "religion",
            "blood group",
            "birthday",
            "email",
            "mobile no",
            "present address",
            "permanent address",
            "logo",
            "signature",
            "qr code",
            "institute name",
            "institute email",
            "institute address",
            "institute mobile no",
            "print date",
          ]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "cm.generateadmitcard" ? (
        <StudentDetails
          labels={["Class", "Section", "Exam", "Template"]}
          items1={["Demo"]}
          items2={["Select Class First"]}
          items3={["Select"]}
          items4={["Select"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}

      {selected == "crt.certificatetemplate" ? (
        <modelContext.Provider value={{ open, setOpen }}>
          <GenricTabs
            modalSrc={[
              "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1707121393/drighna/ramom/Luxury_Gold_Certificate_Of_Appreciation_Certificate_ihnnij.png",
            ]}
            table={[
              "Sl",
              "Name",
              "Applicable User",
              "Page Layout",
              "Background Image",
              "Created At",
              "Action",
            ]}
            table2={[]}
            tableData={[
              {
                c1: "1",
                c2: "demo",
                c3: "Student",
                c4: "A4 (Portrait)",
                c5: (
                  <Image
                    height={50}
                    width={50}
                    src="https://phpstack-1188308-4181836.cloudwaysapps.com/uploads/language_flags/defualt.png"
                  />
                ),
                c6: "08.Jan.2024",
                c7: (
                  <RxHamburgerMenu
                    size={20}
                    className="hover:text-success cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),
              },
            ]}
            modalTitle={"Certificate View"}
            tabs={["Certificate List", "Add Certificate"]}
            inputs={[
              "Certificate Name",
              "Applicable User",
              "Page Layout",
              "User Photo Style",
              "Photo Size px",
              "Layout Spacing Top",
              "Layout Spacing Bottom",
              "Layout Spacing Left",
              "Layout Spacing Right",
              "Signature Image",
              "Logo Image",
              "Background Image",
              "Certificate Content",
            ]}
            type={[0, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3, 5]}
            table2Dropdown={[1, 1, 0]}
            hasLayout={false}
            showHeader={true}
          />
        </modelContext.Provider>
      ) : (
        ""
      )}

      {selected == "crt.generatestudent" ? (
        <StudentDetails
          labels={["Class", "Section", "Template"]}
          items1={["Demo"]}
          items2={["Select Class First"]}
          items3={["Select", "demo"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "crt.generateemployee" ? (
        <StudentDetails
          labels={["Role", "Template"]}
          items1={[
            "EduDrighna Admin",
            "Dedtech Teacher",
            "Accountant",
            "Librarian",
            "Receptionist",
            "DrighnaEdtech",
            "Demo2024",
          ]}
          items2={["Select"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}

      {selected == "payroll-salary template" ? (
        <modelContext.Provider value={{ open, setOpen }}>
          <GenricTabs
            modalSrc={[
              "https://res.cloudinary.com/eaglestudiosindia/image/upload/v1707121393/drighna/ramom/Luxury_Gold_Certificate_Of_Appreciation_Certificate_ihnnij.png",
            ]}
            showHeader={false}
            table={[
              "Sl",
              "Branch",
              "Salary Grades",
              "Basic Salary",
              "Overtime Rate (Per Hour)",
              "Action",
            ]}
            table2={[]}
            tableData={[
              {
                c1: "1",
                c2: "demo",
                c3: "a",
                c4: "$100.00",
                c5: "0",
                c6: (
                  <RxHamburgerMenu
                    size={20}
                    className="hover:text-success cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ),
              },
            ]}
            modalTitle={"Salary Template"}
            tabs={["Template List", "Create Template"]}
            inputs={[
              "Salary Grade",
              "Basic Salary",
              "Overtime Rate (Per Hour)",
            ]}
            type={[0, 0, 0]}
            table2Dropdown={[1, 1, 0]}
            hasLayout={false}
            hasSalary={true}
            ModalContent={<SalaryModal />}
          />
        </modelContext.Provider>
      ) : (
        ""
      )}

      {selected == "payroll-salary assign" ? (
        <StudentDetails
          labels={["Role", "Designation"]}
          items1={[
            "EduDrighna Admin",
            "Dedtech Teacher",
            "Accountant",
            "Librarian",
            "Receptionist",
            "DrighnaEdtech",
            "Demo2024",
          ]}
          items2={["Select"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}

      {selected == "payroll-salary payment" ? (
        <StudentDetails
          labels={["Role"]}
          items1={[
            "EduDrighna Admin",
            "Dedtech Teacher",
            "Accountant",
            "Librarian",
            "Receptionist",
            "DrighnaEdtech",
            "Demo2024",
          ]}
          hasMonthPicker={true}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "advance salary-my application" ? (
        <div className="flex flex-col gap-5">
          <salaryModelContext.Provider value={{ open, setOpen }}>
            <StudentDetails
              labels={[""]}
              items1={[
                "EduDrighna Admin",
                "Dedtech Teacher",
                "Accountant",
                "Librarian",
                "Receptionist",
                "DrighnaEdtech",
                "Demo2024",
              ]}
              hasMonthPicker={true}
              h1={"Select Ground"}
              button={"filter"}
              popup={"Advance Salary Request"}
              modalTitle={"Advance Salary"}
              modalcontent={
                <>
                  <div className="flex flex-col gap-5">
                    <div className=" gap-12 justify-between">
                      <h1>Deduct Month</h1>
                      <Input type="month" />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Amount</h1>
                      <Input type="tel" />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Reason</h1>
                      <Textarea type="tel" />
                    </div>
                  </div>
                </>
              }
            />
          </salaryModelContext.Provider>
          <OneTable
            header={"Advance Salary"}
            table={[
              "#",
              "Photo",
              "Applicant",
              "Deduct Month",
              "Applied On",
              "Created At",
              "Status",
              "Action",
            ]}
            tableData={[]}
            selectionMode="multiple"
            hasFooter={false}
          />
        </div>
      ) : (
        ""
      )}
      {selected == "advance salary-manage application" ? (
        <div className="flex flex-col gap-5">
          <salaryModelContext.Provider value={{ open, setOpen }}>
            <StudentDetails
              labels={[""]}
              items1={[
                "EduDrighna Admin",
                "Dedtech Teacher",
                "Accountant",
                "Librarian",
                "Receptionist",
                "DrighnaEdtech",
                "Demo2024",
              ]}
              hasMonthPicker={true}
              h1={"Select Ground"}
              button={"filter"}
              popup={"Advance Salary Request"}
              modalTitle={"Advance Salary"}
              modalcontent={
                <>
                  <div className="flex flex-col gap-5">
                    <div className=" gap-12 justify-between">
                      <h1>Role</h1>
                      <Ddown
                        label={"Select Role"}
                        items={[
                          "Edudrighna Admin",
                          "Dedtech Teacher",
                          "Accountant",
                          "Librarian",
                        ]}
                      />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Applicant</h1>
                      <Ddown items={["Select"]} />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Deduct Month</h1>
                      <Input type="month" />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Amount</h1>
                      <Input type="tel" />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Reason</h1>
                      <Textarea />
                    </div>
                  </div>
                </>
              }
            />
          </salaryModelContext.Provider>
          <OneTable
            header={"Advance Salary"}
            table={[
              "#",
              "Photo",
              "Applicant",
              "Deduct Month",
              "Applied On",
              "Created At",
              "Status",
              "Action",
            ]}
            tableData={[]}
            selectionMode="multiple"
            hasFooter={false}
          />
        </div>
      ) : (
        ""
      )}
      {selected == "leave-category" ? (
        <Category
          iphead={"Add Category"}
          tablehead={"Category List"}
          inputs={["Category Name"]}
          type={[0]}
          table={["Branch", "Id", "Name", "Action"]}
          tabledata={[{ c1: "Dedtech Demo", c2: "1", c3: "Science", c4: "" }]}
        />
      ) : (
        ""
      )}
      {selected == "leave-my application" ? (
        <GenricTabs
          table={[
            "Sl",
            "Applicant",
            "Leave Category",
            "Date Of Start",
            "Date Of End",
            "Days",
            "Apply Date",
            "Status",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          modalTitle={"Certificate View"}
          tabs={["Leave List", "Leave Request"]}
          inputs={["Leave Type", "Date", "Reason", "Attachment"]}
          type={[1, 7, 5, 5]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "leave-manage application" ? (
        <div className="flex flex-col gap-5">
          <salaryModelContext.Provider value={{ open, setOpen }}>
            <StudentDetails
              labels={[""]}
              items1={[
                "EduDrighna Admin",
                "Dedtech Teacher",
                "Accountant",
                "Librarian",
                "Receptionist",
                "DrighnaEdtech",
                "Demo2024",
              ]}
              hasMonthPicker={true}
              h1={"Select Ground"}
              button={"filter"}
              popup={"Advance Salary Request"}
              modalTitle={"Advance Salary"}
              modalcontent={
                <>
                  <div className="flex flex-col gap-5">
                    <div className=" gap-12 justify-between">
                      <h1>Role</h1>
                      <Ddown
                        label={"Select Role"}
                        items={[
                          "Edudrighna Admin",
                          "Dedtech Teacher",
                          "Accountant",
                          "Librarian",
                        ]}
                      />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Applicant</h1>
                      <Ddown items={["Select"]} />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Leave Category</h1>
                      <Ddown items={["Select"]} />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Leave Date</h1>
                      <Calendar
                        value={dates}
                        onChange={(e) => setDates(e.value)}
                        selectionMode="range"
                        readOnlyInput
                        // inline
                        showIcon
                        className="rounded-lg h-12 bg-success"
                      />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Reason</h1>
                      <Textarea />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Attachment</h1>
                      <FileDropper />
                    </div>
                    <div className=" gap-12 justify-between">
                      <h1>Comments</h1>
                      <Textarea />
                    </div>
                  </div>
                </>
              }
            />
          </salaryModelContext.Provider>
          <OneTable
            header={"Leave List"}
            table={[
              "Sl",
              "Role",
              "Applicant",
              "Leave Category",
              "Date of Start",
              "Date of End",
              "Days",
              "Apply Date",
              "Status",
              "Action",
            ]}
            tableData={[]}
            selectionMode="multiple"
            hasFooter={false}
          />
        </div>
      ) : (
        ""
      )}

      {selected == "hr.award" ? (
        <GenricTabs
          table={[
            "Sl",
            "Applicant",
            "Leave Category",
            "Date Of Start",
            "Date Of End",
            "Days",
            "Apply Date",
            "Status",
            "Action",
          ]}
          table2={[]}
          tableData={[]}
          modalTitle={"Certificate View"}
          tabs={["Award List", "Give Award"]}
          inputs={[
            "Role",
            "Winner",
            "Award Name",
            "Gift Item",
            "Cash Price",
            "Award Reason",
            "Given Date",
          ]}
          type={[1, 1, 0, 0, 0, 0, 4]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}

      {selected == "class & section-control classes" ? (
        <TwoTabs
          tabs={["Class", "Section"]}
          iphead1={"Create Class"}
          tablehead1={"Class List"}
          inputs1={["Name", "Class Numeric", "Section"]}
          iptype1={[0, 0, 1]}
          table1={[
            "#",
            "Branch",
            "Class Name",
            "Class Numeric",
            "Section",
            "Action",
          ]}
          tabledata1={[
            {
              c1: "1",
              c2: "Dedtech Demo",
              c3: "Demo",
              c4: "5",
              c5: "demo",
              c6: "",
            },
          ]}
          //

          iphead2={"Create Section"}
          iptype2={[0, 0]}
          tablehead2={"Section List"}
          inputs2={["Name", "Capacity"]}
          table2={[
            "#",
            "Branch",
            "Class Name",
            "Class Numeric",
            "Section",
            "Action",
          ]}
          tabledata2={[
            {
              c1: "1",
              c2: "Dedtech Demo",
              c3: "Demo",
              c4: "5",
              c5: "demo",
              c6: "",
            },
          ]}
        />
      ) : (
        ""
      )}
      {selected == "class & section-assign class teacher" ? (
        <TwoTabs
          tabs={["Assign Class Teacher"]}
          iphead1={"Class Teacher Allocation"}
          tablehead1={"Class Teacher List"}
          inputs1={["Class", "Section", "Class Teacher"]}
          iptype1={[1, 1, 1]}
          table1={[
            "#",
            "Branch",
            "Class Teacher",
            "Class",
            "Section",
            "Action",
          ]}
          tabledata1={[
            {
              c1: "1",
              c2: "Dedtech Demo",
              c3: "Demo",
              c4: "5",
              c5: "demo",
              c6: "",
            },
          ]}
        />
      ) : (
        ""
      )}

      {selected == "subject-subject" ? (
        <GenricTabs
          table={[
            "Sl",
            "Branch",
            "Subject Name",
            "Subject Code",
            "Subject Type",
            "Subject Author",
            "Action",
          ]}
          table2={[]}
          tableData={[
            {
              c1: "1",
              c2: "Dedtech Demo	",
              c3: "Science",
              c4: "1",
              c5: "Theory",
              c6: "",
              c7: "",
            },
            {
              c1: "1",
              c2: "Dedtech Demo	",
              c3: "Science",
              c4: "1",
              c5: "Theory",
              c6: "",
              c7: "",
            },
          ]}
          modalTitle={"Certificate View"}
          tabs={["Subject List", "Create Subject"]}
          inputs={[
            "Subject Name",
            "Subject Code",
            "Subject Author",
            "Subject Type",
          ]}
          type={[0, 0, 0, 1]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}
      {selected == "subject-class assign" ? (
        <GenricTabs
          table={["Sl", "Class", "Section", "Subject", "Action"]}
          table2={[]}
          tableData={[]}
          modalTitle={"Certificate View"}
          tabs={["Assign List", "Assign"]}
          inputs={["Class", "Section", "Subject"]}
          type={[1, 1, 0]}
          table2Dropdown={[1, 1, 0]}
          hasLayout={false}
          showHeader={true}
        />
      ) : (
        ""
      )}
      {selected == "csd" ? (
        <salaryModelContext.Provider value={{ open, setOpen }}>
          <StudentDetails
            labels={["Class", "Section"]}
            items1={["demo"]}
            items2={["Select Class First"]}
            h1={"Select Ground"}
            button={"save"}
            popup={"Add Schedule"}
            modalcontent={
              <>
                <StudentDetails
                  labels={["Class", "Section", "Day"]}
                  items1={["demo"]}
                  items2={["Select Class First"]}
                  items3={["Select Class First"]}
                  h1={"Select Ground"}
                  button={"save"}
                />
              </>
            }
          />
        </salaryModelContext.Provider>
      ) : (
        ""
      )}

      {selected == "tchs" ? (
        <StudentDetails
          labels={["Teacher"]}
          items1={["demo"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
      {selected == "pmtn" ? (
        <StudentDetails
          labels={["Class", "Section"]}
          items1={["demo"]}
          items2={["Select Class First"]}
          h1={"Select Ground"}
          button={"save"}
        />
      ) : (
        ""
      )}
    </>
  );
}

export const useModelContext = () => {
  return useContext(modelContext);
};
export const useSalaryModelContext = () => {
  return useContext(salaryModelContext);
};
