import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

import React from "react";

const DropDown = () => {
  return (
    <div className="w-72">
      <Select label="Filter">
        <HashLink to="/#Positive">
          <Option>Positive</Option>
        </HashLink>
        <HashLink to="/#NEGATIVE">
          <Option>Negative</Option>
        </HashLink>
        <HashLink to="/#inconclusive">
          <Option>Inconclusive</Option>
        </HashLink>
        <Link to="/">
          <Option>Show all</Option>
        </Link>
      </Select>
    </div>
  );
};

export default DropDown;
{
  /* <div className="w-72 font-medium absolute top-0 right-0 font-sans	">
<div
  onClick={() => setOpen(!open)}
  className={`bg-[#633194] w-full  flex items-center justify-between  p-3 ${
    !selected && "text-white"
  }`}
>
  {selected
    ? selected?.length > 25
      ? selected?.substring(0, 25) + "..."
      : selected
    : "Filter"}
  <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
</div>
<div className="  bg-[#633194] rounded">
  <ul
    className={`bg-[374151] mt-2 overflow-y-auto flex flex-col items-center justify-center ${
      open ? "max-h-60" : "max-h-0"
    }  space-x-9 rounded text-white space-y-3`}
  >
    <li ></li>
    <li className="p-1">
      <HashLink to="/#Positive">Positive</HashLink>
    </li>
    <li className="p-1">
      
    </li>
    <li className="p-1">
    </li>
    <li className="pb-3">
    </li>
  </ul>
</div>
</div> */
}
