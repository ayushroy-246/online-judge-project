
import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    problemNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    statement: {
      type: String,
      required: true,
    },

    inputFormat: {
      type: String,
      required: true,
    },

    outputFormat: {
      type: String,
      required: true,
    },

    constraints: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },

    timeLimitMs: {
      type: Number,
      default: 2000,
    },

    memoryLimitMb: {
      type: Number,
      default: 256,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
