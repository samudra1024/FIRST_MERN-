import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "/src/component/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import OptionMenu from "./OptionMenu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableView = ({ Book }) => {
  return (
    <div className="text-indigo-1100 h-screen">
      <Table className="text-indigo-1100 text-xl min-h-fit rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              NO
            </TableHead>
            <TableHead className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Title
            </TableHead>
            <TableHead className="border border-slate-950 rounded-md max-md:hidden text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Author
            </TableHead>
            <TableHead className="border border-slate-950 rounded-md max-md:hidden text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Publish Date
            </TableHead>
            <TableHead className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Operations
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Book.map((book, index) => {
            return (
              <TableRow key={book._id} className="h-8">
                <TableCell className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                  {index + 1}
                </TableCell>
                <TableCell className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                  {book.title}
                </TableCell>
                <TableCell className="border border-slate-950 rounded-md text-center max-md:hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                  {book.author}
                </TableCell>
                <TableCell className="border border-slate-950 rounded-md text-center max-md:hidden text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
                  {book.publishdate}
                </TableCell>
                <TableCell className="border border-slate-950 rounded-md text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  <OptionMenu Params={book} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
