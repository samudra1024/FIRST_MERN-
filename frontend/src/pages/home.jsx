import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import TableView from '../component/TableView'
import CardView from '@/component/CardView'
import { SkeletonDemo } from '@/component/SkeletonDemo'


const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState([false])
  const [showType, setShowType] = useState('table')
  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5500/books')
      .then((res) => {
        setBooks(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])

  return (
    <div className='p-4 text-indigo-1100'>
      <div className='grid items-center'>
        <div className='flex justify-between'>
          <h1 className='text-3xl text-center my-8'>Book List</h1>
          <span className='w-40 h-1/3 grid justify-center'>
            <button onClick={()=>setShowType('table')} className='px-2 w-40 text-center border border-orange-500 rounded-md text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>
            Table
            </button>
          </span>
          <span className='w-40 h-1/3 grid justify-center'>
            <button onClick={()=>setShowType('card')} className='px-2 w-40 text-center border border-blue-700 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white duration-300'>
            card
            </button>
          </span>
          
          <span className='p-8'>
            <Link to={'/books/create'}>
              <MdOutlineAddBox className='text-sky-800 text-4xl active:animate-ping' />
            </Link>
          </span>
        </div>
        {loading ?
          <SkeletonDemo/> : showType === 'table' ? (<TableView Book={books} />) : (<CardView Book={books} />)
        }
      </div>
    </div>
  )
}

export default Home
