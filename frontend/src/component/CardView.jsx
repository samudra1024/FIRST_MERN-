import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '/src/component/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsFillInfoCircleFill, BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	PopoverAnchor,
  } from '@chakra-ui/react'


const CardView = ({ Book }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{Book.map((items) => (
				<div key={items._id} className='m-3 border border-slate-950 rounded-lg hover:shadow-xl hover:shadow-cyan-200  duration-300'>
					<div className=' m-2 h-10 flex justify-between '>
						<h2 className='m-2 '>
							{items._id}
						</h2>
						<h2 className='p-2 border border-slate-950 rounded-lg'>
							{items.publishdate}
						</h2>
					</div>
					<div className='flex justify-start gap-x-2 '>
						<PiBookOpenTextLight className='my-1' />
						<h2 className='my-1'>
							{items.title}
						</h2>
					</div>
					<div className='flex  justify-start gap-x-2'>
						<BiUserCircle className='my-1' />
						<h2 className='my-1'>
							{items.author}
						</h2>
					</div>
					<div className='flex px-3 py-1 justify-between gap-x-2'>
						<Link to={`/books/show/${items._id}`}>
							<BsFillInfoCircleFill className='text-2xl text-cyan-300 hover:text-black  duration-300' />
						</Link>
						<Link to={`/books/edit/${items._id}`}>
							<AiOutlineEdit className='text-2xl text-yellow-400 hover:text-black  duration-300' />
						</Link>
						<Link to={`/books/delete/${items._id}`}>
							<MdOutlineDelete className='text-2xl text-red-600 hover:text-black duration-300' />
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}

export default CardView
