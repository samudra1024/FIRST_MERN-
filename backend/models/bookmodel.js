import mongoose from "mongoose";

const Bookschema = mongoose.Schema(
    {
        title:{
            type : String,
            required : true
        },
        author:{
            type : String,
            required : true
        },
        publishdate:{
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)
// export const Book =mongoose.

export const BOOK= mongoose.model("cat",Bookschema);