import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "./DropDown";
const HomePage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const history = useLocation();
  const a = history.hash;
  const lable = a.replace("#", "");
  console.log(lable);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://66.135.1.149:8000/search?search=${search}&label=${lable}`
      );
      setData(res.data);
    };
    if (search.length === 0 || search.length > 2) fetchData();
  }, [search, lable]);
  const count = data.count;

  return (
    <>
      <div className="justify-center items-end mt-7">
      
          <div className="mx-20 mt-1 flex items-center justify-center ">
            <div className="w-[900px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              
            >
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-[#633194] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Search the word"
                  required
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
            </div>
          <DropDown />
          </div>
        

        <div className="mx-auto p-10 ">
          <h1 className="max-auto text-green-600 text-3xl">
            There are <span className="font-bold text-red-600">{count}</span>{" "}
            emails that match your query.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
