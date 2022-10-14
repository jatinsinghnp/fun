import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

const Selector = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const hndl = () => {
    setSelected();
  };

  return (
    <>
      <div className="w-72 font-medium absolute top-0 right-0">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-[#374151] w-full  flex items-center justify-between  p-4 ${
            !selected && "text-white"
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : "Filter label"}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>
        <div className="  bg-[#374151] rounded">
          <ul
            className={`bg-[374151] mt-2 overflow-y-auto ${
              open ? "max-h-60" : "max-h-0"
            }  space-x-9 rounded text-white space-y-4`}
          >
            <li></li>
            <li>
              <HashLink to="/#Positive">Positive</HashLink>
            </li>
            <li>
              <HashLink to="/#NEGATIVE">Negative</HashLink>
            </li>
            <li>
              <HashLink to="/#inconclusive">inconclusive</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Selector;
