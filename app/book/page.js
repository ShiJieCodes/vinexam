"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Context } from "../page";
const page = () => {
  const [bookData, setbookData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://fakerapi.it/api/v1/books?_seed=12456"
    );
    const data = await response.json();
    setbookData(data.data);
  };
  useEffect(() => {
    fetchData();
    console.log("fetched");
  }, []);
  return (
    <main className="w-full h-screen ">
      <div className="w-full h-[5%] bg-orange-400 flex justify-center items-center text-lg font-semibold">
        List of Books
      </div>
      <div className="w-full h-full px-5">
        {bookData.map((item) => {
          const dateParts = item.published.split("-");
          const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
          return (
            <Link href={`book/${item.id}`} key={item.id}>
              <ul
                className="w-[40%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 mb-5"
                key={item.id}
              >
                <li>
                  <span className="font-bold">Title:</span> {item.title}
                </li>
                <li>
                  <span className="font-bold">Author:</span> {item.author}
                </li>
                <li>
                  <span className="font-bold">Genre:</span> {item.genre}
                </li>
                <li>
                  <span className="font-bold">Description:</span>{" "}
                  {item.description}
                </li>
                <li>
                  <span className="font-bold">ISBN:</span> {item.isbn}
                </li>
                <li>
                  <span className="font-bold">Published Date:</span>{" "}
                  {formattedDate}
                </li>
                <li>
                  <span className="font-bold">Publisher:</span> {item.publisher}
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default page;
