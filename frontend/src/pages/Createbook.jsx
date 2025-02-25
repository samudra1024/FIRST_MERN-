import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../component/BackButton'
import Spinner from '/src/component/spinner'
import { useSnackbar } from 'notistack'

const Createbook = () => {
  const [title, setTilte] = useState('')
  const [author, setAuthor] = useState('')
  const [publishdate, setPublishdate] = useState('')
  const [loading, setLoading] = useState(false)
  const nav=useNavigate()
  const {enqueueSnackbar} = useSnackbar();
  const handlesavebook = () => {
    const data ={
      title,
      author,
      publishdate
    }
    setLoading(true)
    axios
      .post(`http://localhost:5500/books`,data)
      .then(()=>{
        setLoading(false)
        enqueueSnackbar('Book Created Successfully' , {variant:'success'})
        nav('/')
      } )
      .catch((error) => {
        setLoading(false)
        // alert("An error has occured please try again ")
        enqueueSnackbar('All Fields Must Be Entered' , {variant:'info'})
        console.log(error)
      });
    }
    const GoingBack = () => {
      try{
        setLoading(true)
        nav('/')
      }catch(error){
        console.log(error)
        enqueueSnackbar('An error has occured please try again' , {variant:'error'})
      }
    
  }
  return (
    <div className='p-4 text-indigo-1100'>
      <div className='p-25'><BackButton className=' animate-bounce'/>
      <h1 className='text-2xl text-center py-10 text-pink-600'>Create book</h1></div>
      {loading ? <Spinner/> : ''}
      <div className='grid justify-center'>
        <div className='p-5'>
          <label className='text-4 text-pink-600'>Title : </label>
          <input type="text" value={title} onChange={(e)=> setTilte(e.target.value)} className=' bg-colombiablue-100 border border-pink-600 rounded-md transition duration-300'/>
        </div>
        <div className='p-5'>
          <label className='text-4 text-pink-600'>Author : </label>
          <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} className='border border-pink-600 rounded-md transition duration-300 bg-colombiablue-100 '/>
        </div>
        <div className='p-5'>
          <label className='text-4 text-pink-600'>publishdate : </label>
          <input type="text" value={publishdate} onChange={(e)=> setPublishdate(e.target.value)} className='border border-pink-600 rounded-md transition duration-300 bg-colombiablue-100'/>
        </div>
        <div className='h-24 w-50  flex space-x-5 items-center'>
          <button onClick={handlesavebook} className='rounded-md h-1/2 w-full transition duration-300 border border-green-500 hover:bg-green-500  hover:text-black'> Submit </button>
          <button onClick={GoingBack} className='rounded-md h-1/2 w-full border border-red-500 hover:bg-red-500 hover:text-black transition duration-300'> Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default Createbook


