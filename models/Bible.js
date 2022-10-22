import mongoose from "mongoose"

const bibleSchema = new mongoose.Schema({
    title : { type: String },
    description : { type: String },
    line : { type: String },
   },{
    timestamps:true
 }
 )

const Bible = mongoose.model("bibles", bibleSchema)
export default Bible