import mongoose, { Schema, model } from "mongoose";

const quoteSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'category'
    },
}, {
    versionKey: false
})

export const quoteModel = model('quote', quoteSchema)