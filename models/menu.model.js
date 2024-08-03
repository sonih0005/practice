import mongoose, {Schema} from "mongoose";

const menuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    sales: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export const Menu = mongoose.model('menu', menuSchema)