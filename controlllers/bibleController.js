import Bible from "../models/Bible"

class bibleController{
    static async createBible(req,res){
       
        try {
            const bible = await Bible.create({
                title: req.body.title,
                description: req.body.description,
                line: req.body.line
            })
            
            return res.status(201).json({message:"notes takes",bible})
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message})
        }
    }
    static async getVerseById(req,res){
        try {
            const id = req.params._id
            const bible = await Bible.findById(id)
            return res.status(201).json({message:"notes retrived",bible})
        } catch (error) {
            console.log(error);
            return res.status(404).json({error: error.message})
        }
    }
    static async getAllVerse(req,res){
        try {
            const bible = await Bible.find({})
            return res.status(201).json({message:"all verses",bible})
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    static async deleteVerse(req,res){
        try {
            const id = req.params._id
            const bible = await Bible.findByIdAndDelete(id)
            return res.status(201).json({message:"verse deleted",bible})
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
    static async updateVerse(req,res){
        try {
            const id = req.params._id
            const bible = await Bible.findByIdAndUpdate(
             id,   
            {
                $set: req.body,
            },
            { new:true}
            )
            return res.status(201).json({message:"verse updated",bible})
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
}

export default bibleController
