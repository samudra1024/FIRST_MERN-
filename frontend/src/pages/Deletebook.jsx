import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../component/BackButton'
import Spinner from '/src/component/spinner'
import { useSnackbar } from 'notistack'

const Deletebook = () => {
  const [book , setBook] = useState({})
  const [loading , setLoading ] = useState(false)
  const { id } = useParams()
  const nav = useNavigate()
  const { enqueueSnackbar } = useSnackbar();

  const Handlesavebook = ()=>{
    axios
      .delete(`http://localhost:5500/books/${id}`)
      .then(() => {
        setLoading(true)
        enqueueSnackbar('Book Created Successfully' , {variant:'success'})
        nav('/')
      } )
      .catch((error) => {
        setLoading(false)
        // alert("No book found!")
        enqueueSnackbar('No book found!' , {variant:'error'})
        console.log(error)
      })
  }
  return (
    <div className='space-y-9 text-PictonBlue-100'>
      <div className='p-5'>
        <BackButton/>
        <h1 className='text-4xl text-center'>Are You Sure You Want To Delete This Book?</h1>
      </div>
      <div className='grid justify-center'>
        <button onClick={Handlesavebook} className='border-2 text-red-500 border-red-500 px-32 py-3 hover:bg-red-500 hover:text-white transition duration-300 rounded-md'>Confirm</button>
      </div>
    </div>
  )
}

export default Deletebook
