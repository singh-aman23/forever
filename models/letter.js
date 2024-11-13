import mongoose, { models, Schema } from "mongoose";

const letterSchema = new Schema(
  {
    date: {
      type: String,
      required : true
    },
    greetings: {
      type: String,
      required : true

    },
    content: {
      type: String,
      required : true

    },
  },
  { timestamps: true }
);

const Letter = models.Letter || mongoose.model("Letter", letterSchema);
export default Letter;
