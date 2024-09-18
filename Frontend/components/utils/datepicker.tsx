import React from "react";
import { useTheme } from "next-themes";

function DatePicker(props: any) {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`relative mb-3 ${
          theme == "light" ? "bg-[#f4f4f5]" : "bg-[#27272a]"
        } p-4 rounded-xl`}
        data-te-datepicker-init
        data-te-input-wrapper-init
      >
        <input
          type="date"
          className="peer p-4 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date"
        />
        <label
          htmlFor="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.2rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary text-xs"
        >
          {props.label}
        </label>
      </div>
    </>
  );
}

export default DatePicker;
