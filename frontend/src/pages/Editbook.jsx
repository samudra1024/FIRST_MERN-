import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../component/BackButton";
import Spinner from "/src/component/spinner";
import { useSnackbar } from "notistack";

const Editbook = () => {
  const [title, setTilte] = useState("");
  const [author, setAuthor] = useState("");
  const [publishdate, setPublishdate] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handlesavebook = () => {
    const data = {
      title,
      author,
      publishdate,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5500/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        nav("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error has occured please try again ")
        enqueueSnackbar("All Fields Must Be Entered", { variant: "info" });
        console.log(error);
      });
  };
  const GoingBack = () => {
    try {
      setLoading(true);
      nav("/");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("An error has occured please try again", {
        variant: "error",
      });
    }
  };
  return (
    <div className="p-4">
      <div className="p-25">
        <BackButton className=" animate-bounce" />
        <h1 className="text-2xl text-center py-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
          Update book
        </h1>
      </div>
      {loading ? <Spinner /> : ""}
      <div className="grid justify-center">
        <div className="p-5">
          <label className="text-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
            Title :{" "}
          </label>
          <input
            type="text"
            value={title}
            placeholder="eg : MERN"
            onChange={(e) => setTilte(e.target.value)}
            className="mx-14 border border-pink-300 rounded-md hover:bg-slate-100 transition duration-300"
          />
        </div>
        <div className="p-5">
          <label className="text-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
            Author :{" "}
          </label>
          <input
            type="text"
            value={author}
            placeholder="eg : Samudra"
            onChange={(e) => setAuthor(e.target.value)}
            className="mx-9 border border-pink-300 rounded-md hover:bg-slate-100 transition duration-300  "
          />
        </div>
        <div className="p-5">
          <label className="text-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
            publishdate :{" "}
          </label>
          <input
            type="text"
            value={publishdate}
            placeholder="DD/MM/YYYY"
            onChange={(e) => setPublishdate(e.target.value)}
            className=" border border-pink-300 rounded-md hover:bg-slate-100 transition duration-300 "
          />
        </div>
        <div className="h-24 w-50  flex space-x-5 items-center">
          <button
            onClick={handlesavebook}
            className="rounded-md h-1/2 w-full transition duration-300 border border-green-500 hover:bg-green-500  hover:text-white"
          >
            {" "}
            Submit{" "}
          </button>
          <button
            onClick={GoingBack}
            className="rounded-md h-1/2 w-full border border-rose-500 hover:bg-rose-500 hover:text-white transition duration-300"
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editbook;
