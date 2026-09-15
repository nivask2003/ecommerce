const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },

                name: {
                    type: String,
                    required: true,
                },

                image: {
                    type: String,
                },

                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                },

                price: {
                    type: Number,
                    required: true,

                },
            },
        ],

        shippingAddress: {
            fullName: String,
            phone: String,
            addressLine: String,
            city: String, 
            state: String,
            pincode: String,
        },

        paymentMethod: {
            type: String,
            enum: ["COD", "RAZORPAY"],
            default: "COD",
        },

        paymentStatus: {
            type: String,
            enum: ["PENDING", "PAID", "FAILED"],
            default: "PENDING",
        },

        orderStatus: {
            type: String,
            enum: [
                "PENDING",
                "CONFIRMED",
                "PROCESSING",
                "SHIPPING",
                "OUT_FOR_DELIVERY",
                "DELIVERED",
                "CANCELLED",
            ],
            default: "PENDING",
        },

        subtotal: {
            type: Number,
            required: true,
        },
         
        discount: {
            type: Number,
            default: 0,
        },
         
        deliveryCharge: {
            type: Number,
            default: 0,
        },

        totalAmount: {
            type: Number,
            required: true,
        },

        razorpayOrderId: {
            type: String,
        },

        razorpayPaymentId: {
            type: String,
        },


    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", orderSchema);