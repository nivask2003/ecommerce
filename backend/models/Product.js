const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
            trim: true,
        },

        slug : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        description : {
            type: String,
            required: true,
        },

        price : {
            type: Number,
            required: true,
            min: 0,
        },

        discountPrice : {
            type: Number,
            min: 0,
        },

        images: [
            {
                type: String, 
            },
        ],

        category : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required : true,
        },

        brand : {
            type: String, 
            trim: true, 
        },

        stock : {
            type: Number,
            required : true, 
            min : 0,
            default : 0,
        },

        unit : {
            type: String,
            default: "piece",
        },

        isActive : {
            type: Boolean,
            default: true,
        },

        rating : {
            type: Number,
            default: 0,
        },

        numReviews : {
            type: Number,
            default: 0,
        },

    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Product", productSchema);