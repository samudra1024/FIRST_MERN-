import React from 'react'
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


const OptionMenu = ({ Params }) => {
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem >
                        <Link to={`/books/show/${Params._id}`} className='flex justify-start space-x-1.5'>
                            <BsInfoCircle className='text-2xl text-green-800 active:animate-ping' />
                            <p>INFO</p>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/books/edit/${Params._id}`} className='flex justify-start space-x-1'>
                            <AiOutlineEdit className='text-2xl text-yellow-600 active:animate-ping' />
                            <p>UPDATE</p>
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link to={`/books/delete/${Params._id}`} className='flex justify-start space-x-1'>
                            <MdOutlineDelete className='text-2xl text-red-600 active:animate-ping' />
                            <p>DELETE</p>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default OptionMenu
