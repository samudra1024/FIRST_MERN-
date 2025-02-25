import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '/src/component/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
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
} from '@chakra-ui/react'
import { ChevronDownIcon } from 'lucide-react'
import OptionMenu from './OptionMenu'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const TableView = ({ Book }) => {
    return (
        <div className='text-indigo-1100 h-screen'>
            <Table className='text-indigo-1100 text-xl min-h-fit rounded-md'>
                <TableHeader >
                    <TableRow>
                        <TableHead className='border border-slate-950 rounded-md'>NO</TableHead>
                        <TableHead className='border border-slate-950 rounded-md'>Title</TableHead>
                        <TableHead className='border border-slate-950 rounded-md max-md:hidden'>Author</TableHead>
                        <TableHead className='border border-slate-950 rounded-md max-md:hidden'>Publish Date</TableHead>
                        <TableHead className='border border-slate-950 rounded-md'>Operations</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Book.map((book, index) => {
                        return (<TableRow key={book._id} className='h-8'>
                            <TableCell className='border border-slate-950 rounded-md text-center'>
                                {index + 1}
                            </TableCell>
                            <TableCell className='border border-slate-950 rounded-md text-center'>
                                {book.title}
                            </TableCell>
                            <TableCell className='border border-slate-950 rounded-md text-center max-md:hidden'>
                                {book.author}
                            </TableCell>
                            <TableCell className='border border-slate-950 rounded-md text-center max-md:hidden'>
                                {book.publishdate}
                            </TableCell>
                            <TableCell className='border border-slate-950 rounded-md text-center'>
                                <OptionMenu Params={book}/>
                            </TableCell>
                        </TableRow>
                        )
                    }
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableView
