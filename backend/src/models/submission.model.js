
import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    problemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
      required: true,
    },

    language: {
      type: String,
      enum: ["cpp", "java", "python"],
      required: true,
    },

    sourceCode: {
      type: String,
      required: true,
    },

    verdict: {
      type: String,
      enum: ["Pending", "AC", "WA", "CE", "RE", "TLE"],
      default: "Pending",
    },

    executionTimeMs: {
      type: Number,
      default: null,
    },

    passedTestCases: {
      type: Number,
      default: 0,
    },

    totalTestCases: {
      type: Number,
      default: 0,
    },

    errorMessage: {
      type: String,
      default: null,
      maxlength: 2000,
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
