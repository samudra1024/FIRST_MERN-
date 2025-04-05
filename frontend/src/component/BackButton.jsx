import { BiLeftArrowAlt } from "react-icons/bi";
import React from 'react'
import { Link } from "react-router-dom";


const BackButton = ({destination='/'}) => {
  return (
    <div>
        <Link to={destination} >
            <BiLeftArrowAlt className='size-10 active:animate-ping'/>
        </Link>
    </div>
  )
}

export default BackButton
