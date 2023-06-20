import { authorModel } from "../models/author.model.js"
import { authorValidation } from "../validations/authorValidation.js"

export const Author = {
    getAll: async (req, res) => {
        try {
            const data = await authorModel.find()
            return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await authorModel.findById(id)
            return res.status(200).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const validationData = await authorValidation()
            const data = await authorModel.create(validationData)
            return res.status(201).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    updateById: async (req, res) => {
        try {
            const { id } = req.params
            const validationData = authorValidation(req.body)
            const data = await authorModel.findByIdAndUpdate(id, validationData)
            return res.status(201).send(data)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await authorModel.findByIdAndDelete(id)
            return res.status(201).send(`${id} Deleted!`)
        } catch (error) {
            return res.status(500).send(error)
        }
    },
}