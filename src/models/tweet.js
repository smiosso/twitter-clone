import mongoose from "mongoose";

const tweetSchema = new mongoose.schema({
    content: {
    type: String,
    required: true,
    maxlength: 280,
  },
    author: {
    type: String,
    required: true,
  },
    createdAt: {
    type: Date,
    default: Date.now,
  },
})

// we have to define this way because of hot reloading
export let Tweet = mongoose.models.Tweet ?? mongoose.model("Tweet", tweetSchema);