import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../component/BackButton";
import Spinner from "/src/component/spinner";
import { useSnackbar } from "notistack";

const Deletebook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const Handlesavebook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5500/books/${id}`)
      .then(() => {
        setLoading(true);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        nav("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("No book found!")
        enqueueSnackbar("No book found!", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="space-y-9">
      <div className="p-5">
        <BackButton />
        <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
          Are You Sure You Want To Delete This Book?
        </h1>
      </div>
      <div className="grid justify-center">
        <button
          onClick={Handlesavebook}
          className="border-2 text-rose-400  border-rose-400 px-32 py-3 hover:bg-rose-600 hover:text-white transition duration-300 rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Deletebook;
