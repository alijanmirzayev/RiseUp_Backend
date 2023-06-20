import { Schema, model } from "mongoose";

const authorSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String
    }
}, {
    versionKey: false
})

export const authorModel = model('author', authorSchema)