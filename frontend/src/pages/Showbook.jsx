import React , { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../component/BackButton'
import Spinner from '/src/component/spinner'
import axios from "axios";


const Showbook = () => {
  const [books , setBooks ] = useState({})
  const [loading , setLoading ] = useState([false])
  const { id } = useParams()
  useEffect(() => {
     setLoading(true)
     axios
        .get(`http://localhost:5500/books/${id}`)
        .then((res)=>{
          setBooks(res.data)
          setLoading(false)
        })
        .catch((error)=>{
          console.log(error)
          setLoading(false)
        })
  }, [])
  return (
    <div className='p-4 space-y-10 text-indigo-1100'>
      <BackButton className='active:animate-ping'/>
      <h1 className='text-xl text-center'>Show Books</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className='grid justify-center'>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>Id :</span>
            <span className='text-md px-4'>{books._id}</span> 
          </div>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>Title :</span>
            <span className='text-md px-4'>{books.title}</span> 
          </div>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>author :</span>
            <span className='text-md px-4'>{books.author}</span> 
          </div>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>publishdate :</span>
            <span className='text-md px-4'>{books.publishdate}</span> 
          </div>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>createdAt :</span>
            <span className='text-md px-4'>{books.createdAt}</span> 
          </div>
          <div className='p-1 hover:underline'>
            <span className='text-xl text-red-400 p-2'>updatedAt :</span>
            <span className='text-md px-4'>{books.updatedAt}</span> 
          </div>
        </div>
      ) }
    </div>
  )
}

export default Showbook


// flex justify-center items-center h-screen bg-gray-200