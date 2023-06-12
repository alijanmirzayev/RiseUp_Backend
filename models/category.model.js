import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    }
}, {
    versionKey: false
})

export const categoryModel = model('category', categorySchema)