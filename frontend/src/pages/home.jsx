import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import TableView from "../component/TableView";
import CardView from "@/component/CardView";
import { SkeletonDemo } from "@/component/SkeletonDemo";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [showType, setShowType] = useState("table");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5500/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="grid items-center">
        <div className="flex justify-between">
          <h1 className="text-3xl text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Book List
          </h1>
          <span className="w-40 h-1/3 grid justify-center">
            <button
              onClick={() => setShowType("table")}
              className="group relative px-2 w-40 text-center bg-white border border-orange-500 rounded-md text-orange-500 overflow-hidden transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">Table</span>
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </span>
          <span className="w-40 h-1/3 grid justify-center">
            <button
              onClick={() => setShowType("card")}
              className="group relative px-2 w-40 text-center bg-white border border-blue-700 rounded-md text-blue-700 overflow-hidden transition-all hover:text-white duration-300"
            >
              <span className="relative z-10">Card</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </span>

          <span className="p-8">
            <Link to={"/books/create"}>
              <MdOutlineAddBox className="text-sky-800 text-4xl active:animate-ping" />
            </Link>
          </span>
        </div>
        {loading ? (
          <SkeletonDemo />
        ) : showType === "table" ? (
          <TableView Book={books} />
        ) : (
          <CardView Book={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
