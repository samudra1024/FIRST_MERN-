import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../component/BackButton";
import Spinner from "/src/component/spinner";
import axios from "axios";
import { Skeleton } from "@chakra-ui/react";

const Showbook = () => {
  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState([false]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/books/${id}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 space-y-10">
      <BackButton />
      <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
        Show Books
      </h1>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="grid justify-center">
          <div className="p-1 hover:underline ">
            <span className="text-xl text-red-400 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Title :
            </span>
            <span className="text-md px-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              {books.title}
            </span>
          </div>
          <div className="p-1 hover:underline">
            <span className="text-xl text-red-400 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Author :
            </span>
            <span className="text-md px-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              {books.author}
            </span>
          </div>
          <div className="p-1 hover:underline">
            <span className="text-xl text-red-400 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Publishdate :
            </span>
            <span className="text-md px-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              {books.publishdate}
            </span>
          </div>
          <div className="p-1 hover:underline">
            <span className="text-xl text-red-400 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              CreatedAt :
            </span>
            <span className="text-md px-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              {books.createdAt}
            </span>
          </div>
          <div className="p-1 hover:underline">
            <span className="text-xl text-red-400 p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              UpdatedAt :
            </span>
            <span className="text-md px-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              {books.updatedAt}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showbook;

// flex justify-center items-center h-screen bg-gray-200
