import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  { timestamps: true }
);

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Give away", "Request", "Gratitude", "Recipe"],
    },
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
    comments: [commentSchema],
  },
  {
    comments: [commentSchema],
    author: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  { timestamps: true }
);



const Blog = mongoose.model("Blog", blogSchema);

export { Blog };
