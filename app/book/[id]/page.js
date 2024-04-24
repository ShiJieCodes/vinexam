"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const page = ({ params }) => {
  const [bookData, setbookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
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
  useEffect(() => {
    const rightbook = bookData.find((item) => item.id === params.id);
    setSelectedBook(rightbook);
  }, [bookData, params]);
  // const dateParts = selectedBook?.published?.split("-");
  // const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  return (
    <div>
      <img
        src={`${selectedBook?.image}`}
        className="object-contain w-[50%] h-[50%]"
      />
      <h1>{selectedBook?.title}</h1>
      <p>Author: {selectedBook?.author}</p>
      <p>Genre: {selectedBook?.genre}</p>
      <p>Description: {selectedBook?.description}</p>
      <p>ISBN: {selectedBook?.isbn}</p>
      <p>Published Date: {selectedBook?.published}</p>
      <span className="font-bold">Publisher:</span> {selectedBook?.publisher}
      <Link href="/book">Back to list</Link>
    </div>
  );
};
export default page;
