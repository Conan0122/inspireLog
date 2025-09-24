import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false   // prevents returning password accidently
        },
        bio: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            required: true
        },
        profileImage: {
            type: String,
            default: ""
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)