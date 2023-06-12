import { quoteModel } from "../models/quote.model.js"

export const Quote = {
    add: async(req, res) => {
        try {
            const data = await quoteModel.create(req.body)
            return res.status(201).send(data)
        } catch (error) {
            console.log('Quote.add', error)
        }
    },
    getAll: async (req, res) => {
        try {
            const data = await quoteModel.find()
            return res.status(200).send(data)
        } catch (error) {
            console.log('Quote.getAll', error)
        }
    },
    getAllQoutesByCategoryId: async (req, res) => {
        try {
            const { categoryId } = req.params
            const data = await quoteModel.find({categoryId: categoryId})
            return res.status(200).send(data)
        } catch (error) {
            console.log('Quote.getProductByCategoryId', error)
        }
    },
    editById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await quoteModel.findByIdAndUpdate(id, req.body)
            return res.status(200).send(data)
        } catch (error) {
            console.log('Quote.editById', error)
        }
    },
    deleteById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await quoteModel.findByIdAndDelete(id)
            return res.status(200).send(data)
        } catch (error) {
            console.log('Quote.deleteById', error)
        }
    },
}