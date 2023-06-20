import { categoryModel } from "../models/category.model.js"
import { categoryValidation } from "../validations/categoryValidation.js"

export const Category = {
    getAll: async (req, res) => {
        try {
            const data = await categoryModel.find()
            return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await categoryModel.findById(id)
            return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const validationData = await categoryValidation()
            const data = await categoryModel.create(validationData)
            return res.status(201).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updateById: async (req, res) => {
        try {
            const { id } = req.params
            const validationData = categoryValidation(req.body)
            const data = await categoryModel.findByIdAndUpdate(id, validationData)
            return res.status(201).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await categoryModel.findByIdAndDelete(id)
            return res.status(201).send(`${id} Deleted!`)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
}