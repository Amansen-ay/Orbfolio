import mongoose from 'mongoose';
import { Link } from '../../../../domain/links/link.js';

const LinkSchema = new mongoose.Schema<Link>(
    {
        id: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
            index: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        url: {
            type: String,
            required: true,
            trim: true,
        },
        order: {
            type: Number,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const LinkModel = mongoose.model<Link>("Link", LinkSchema);

export default LinkModel
