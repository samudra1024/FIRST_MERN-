import express from 'express'
import { BOOK } from '../models/bookmodel.js'
import mongoose from 'mongoose'


const router = express.Router()


router.post('/books',async (req,res) => {
    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.publishdate
        ){
        return res.status(400).send({
            message:"all fields are required to enter"
        })}
        const newbook={
            title:req.body.title,
            author:req.body.author,
            publishdate:req.body.publishdate
        }

        const book = await BOOK.create(newbook);
        return res.status(202).send(book);
    }catch(error){
        console.log(error.message);
        res.status(500).send({
            message:error.message
        });
    }
})

router.get('/books', async (req,res)=>{
    try{
        const books = await BOOK.find({})
        return res.status(200).send({
            count : books.length,
            data : books
        })
    }catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

router.get('/books/:id', async (req,res)=>{
    try{
        const {id} = req.params
        const books = await BOOK.findById(id)
        return res.status(200).send(books)
    }catch(error){
        console.log(error.message);
        res.status(500).send(error.message)
    }
})

router.put('/books/:id',async (req,res)=>{
    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.publishdate
        ){
            return res.status(400).send({
                message:"All fields are required"
            })
        }
        const { id } = req.params

        const books = await BOOK.findByIdAndUpdate(id,req.body)

        if(!books)
        {
            return res.status(404).send({
                message:"book not found"
            })
        }
        return res.status(200).send({
            message:`Updated successfully`
        })
    }catch(error)
    {
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

router.delete('/books/:id',async (req,res)=>{
    try{
        const { id } = req.params

        // if(!mongoose.Types.ObjectId.isValid(id)){
        //     return res.status(400).send({
        //         message:"Invalid book Id"
        //     })
        // }

        const del_book= await BOOK.findByIdAndDelete(id)

        if(!del_book){
            return res.status(404).send({
                message:"Book not found"
            })
        }
        return res.status(200).send({
            message:"Book deleted successfully"
        })
    }catch(error){
        console.log(error.message)
        res.status(500).send(error.message)
    }
})

export default router