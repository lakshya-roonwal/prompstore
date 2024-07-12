import mongoose from "mongoose";

const promptSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Prompts =  mongoose.models.Prompts || mongoose.model("Prompts", promptSchema);

export {Prompts};
