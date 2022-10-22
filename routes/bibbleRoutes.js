import express from "express";
import bibleController from "../controlllers/bibleController";
const bibleRoutes = express()

bibleRoutes.post("/create", bibleController.createBible)
bibleRoutes.get("/verse/:_id", bibleController.getVerseById)
bibleRoutes.get("/allVerse",bibleController.getAllVerse)
bibleRoutes.delete('/deleteVerse/:_id',bibleController.deleteVerse)
bibleRoutes.put("/updateVerse/:_id", bibleController.updateVerse)

export default bibleRoutes
