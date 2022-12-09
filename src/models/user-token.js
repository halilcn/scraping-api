import { model, Schema } from "mongoose";

const UserToken = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    token: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default model('UserToken', UserToken)