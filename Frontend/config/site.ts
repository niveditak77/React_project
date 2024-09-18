export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ramom",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [],
  navMenuItems: [
    {
      label: "Inventory",

      href: [
        { item: "Product", isNested: false, key: "i.product", items: [""] },
        { item: "Category", isNested: false, key: "i.category", items: [""] },
        { item: "Store", isNested: false, key: "i.store", items: [""] },
        { item: "Supplier", isNested: false, key: "i.supplier", items: [""] },
        { item: "Unit", isNested: false, key: "i.unit", items: [""] },
        { item: "Purchase", isNested: false, key: "i.purchase", items: [""] },
        { item: "Sales", isNested: false, key: "i.sales", items: [""] },
        { item: "Issue", isNested: false, key: "i.issue", items: [""] },
      ],
    },
    {
      label: "Frontend",

      href: [
        { item: "Setting", isNested: false, key: "f.setting", items: [""] },
        { item: "Menu", isNested: false, key: "f.menu", items: [""] },
        {
          item: "Page Section",
          isNested: false,
          key: "f.pagesection",
          items: [""],
        },
        {
          item: "Manage Page",
          isNested: false,
          key: "f.managepage",
          items: [""],
        },
        { item: "Slider", isNested: false, key: "f.slider", items: [""] },
        { item: "Features", key: "f.features", items: [""] },
        {
          item: "Testimonial",
          isNested: false,
          key: "f.testimonial",
          items: [""],
        },
        { item: "Service", isNested: false, key: "f.service", items: [""] },
        { item: "Faq", isNested: false, key: "f.faq", items: [""] },
        {
          item: "Gallery Category",
          isNested: false,
          key: "f.gallerycategory",
          items: [""],
        },
        { item: "Gallery", isNested: false, key: "f.gallery", items: [""] },
      ],
    },
    {
      label: "Reception",

      href: [
        {
          item: "Admission Enquiry",
          isNested: false,
          key: "r.admissionenquiry",
          items: [""],
        },
        {
          item: "Postal Record",
          isNested: false,
          key: "r.postalrecord",
          items: [""],
        },
        { item: "Call Log", isNested: false, key: "r.calllog", items: [""] },
        {
          item: "Visitor Log",
          isNested: false,
          key: "r.visitorlog",
          items: [""],
        },
        { item: "Complaint", isNested: false, key: "r.complaint", items: [""] },
        {
          item: "Config Reception",
          isNested: false,
          key: "r.configreception",
          items: [""],
        },
      ],
    },
    {
      label: "Admission",

      href: [
        {
          item: "Create Admission",
          isNested: false,
          key: "a.createadmission",
          items: [""],
        },
        {
          item: "Online Admission",
          isNested: false,
          key: "a.onlineadmission",
          items: [""],
        },
        {
          item: "Multiple Import",
          isNested: false,
          key: "a.multipleimport",
          items: [""],
        },
        { item: "Category", isNested: false, key: "a.category", items: [""] },
      ],
    },
    {
      label: "Student Details",

      href: [
        {
          item: "Student List",
          isNested: false,
          key: "sd.studentlist",
          items: [""],
        },
        {
          item: "Login Deactivate",
          isNested: false,
          key: "sd.logindeactivate",
          items: [""],
        },
        {
          item: "Deactivate Reason",
          isNested: false,
          key: "sd.deactivatereason",
          items: [""],
        },
      ],
    },
    {
      label: "Parents",

      href: [
        {
          item: "Parent List",
          isNested: false,
          key: "pl.parentlist",
          items: [""],
        },
        {
          item: "Add Parent",
          isNested: false,
          key: "pl.addparent",
          items: [""],
        },
        {
          item: "Login Deactivate",
          isNested: false,
          key: "pl.logindeactivate",
          items: [""],
        },
      ],
    },
    {
      label: "Employee",

      href: [
        {
          item: "Employee List",
          isNested: false,
          key: "ep.employeelist",
          items: [""],
        },
        {
          item: "Add Department",
          isNested: false,
          key: "ep.adddepartment",
          items: [""],
        },
        {
          item: "Add Designation",
          isNested: false,
          key: "ep.adddesignation",
          items: [""],
        },
        {
          item: "Add Employee",
          isNested: false,
          key: "ep.addemployee",
          items: [""],
        },
        {
          item: "Login Deactivate",
          isNested: false,
          key: "ep.logindeactivate",
          items: [""],
        },
      ],
    },
    {
      label: "Card Management",

      href: [
        {
          item: "Id Card Template",
          isNested: false,
          key: "cm.idcardtemplate",
          items: [""],
        },
        {
          item: "Student Id Card",
          isNested: false,
          key: "cm.studentidcard",
          items: [""],
        },
        {
          item: "Employee Id Card",
          isNested: false,
          key: "cm.employeeidcard",
          items: [""],
        },
        {
          item: "Admit Card Template",
          isNested: false,
          key: "cm.admitcardtemplate",
          items: [""],
        },
        {
          item: "Generate Admit Card",
          isNested: false,
          key: "cm.generateadmitcard",
          items: [""],
        },
      ],
    },
    {
      label: "Certificate",

      href: [
        {
          item: "Certificate Template",
          isNested: false,
          key: "crt.certificatetemplate",
          items: [""],
        },
        {
          item: "Generate Student",
          isNested: false,
          key: "crt.generatestudent",
          items: [""],
        },
        {
          item: "Generate Employee",
          isNested: false,
          key: "crt.generateemployee",
          items: [""],
        },
      ],
    },
    {
      label: "Human Resource",

      href: [
        {
          item: "Payroll",
          key: "pyrl.items",
          isNested: true,
          items: ["Salary Template", "Salary Assign", "Salary Payment"],
        },
        {
          item: "Advance Salary",
          key: "ads.items",
          isNested: true,
          items: ["My Application", "Manage Application"],
        },
        {
          item: "Leave",
          key: "lve.items",
          isNested: true,
          items: ["Category", "My Application", "Manage Application"],
        },
        { item: "Award", isNested: false, key: "hr.award" },
      ],
    },
    {
      label: "Academic",

      href: [
        {
          item: "Class & Section",
          key: "cst.items",
          isNested: true,
          items: ["Control Classes", "Assign Class Teacher"],
        },
        {
          item: "Subject",
          key: "sbj.items",
          isNested: true,
          items: ["Subject", "Class Assign"],
        },
        {
          item: "Class Schedule",
          key: "csd",
          isNested: false,
        },
        {
          item: "Teacher Schedule",
          key: "tchs",
          isNested: false,
        },
        {
          item: "Promotion",
          key: "pmtn",
          isNested: false,
        },
      ],
    },
  ],
  links: {
    sponsor: "https://rohitgadekar.com",
  },
};
