import express from 'express'
import { Teachers } from '../db/teacherschema.js'


const router = express.Router()

router.get("/teacher", async (req, res) => {

    try {
        const teacher = await Teachers.find()
        return res.status(200).json({ message: "successfully got the data", teacher })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })


    }
})


router.post("/postteacher", async (req, res) => {
    try {
        const newteacher = await new Teachers({
            ...req.body
        }).save()

        return res.status(200).json({ message: "successfully got the data", newteacher })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }


})


router.put("/editteacher/:id", async (req, res) => {

    try {
        const editteacher = await Teachers.findByIdAndUpdate(
            { _id: req.params.id }, { $set: req.body }, { new: true }
        )
        return res.status(200).json({ message: "successfully edited the data", editteacher })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })

    }

})


router.delete("/deleteteacher/:id", async (req, res) => {
    try {
        const deletestudent = await Teachers.findByIdAndDelete(
            { _id: req.params.id }
        )
        return res.status(200).json({ message: "successfully deleted" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "internal server error" })
    }

})


 export const teacherRouter=router