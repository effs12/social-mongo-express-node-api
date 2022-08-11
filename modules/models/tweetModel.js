import mongoose from 'mongoose'

const tweetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        content: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }
)

const Tweet = mongoose.models.Tweet || mongoose.model('Tweet' , tweetSchema);

export default Tweet