import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required!"],
    minLength: [5, "Subject must contain at least 5 characters!"],
  },
  date: {
    type: String, // ✅ store as string for simplicity, since you're not doing date math
    required: [true, "Date Required!"],
    validate: {
      validator: v => /^\d{4}-\d{2}-\d{2}$/.test(v),
      message: "Date must be in YYYY-MM-DD format."
    }
  },
  time: {
      type: String,
      required: [true, "Time Required!"],
      validate: {
        validator: v => /^([01]\d|2[0-3]):([0-5]\d)$/.test(v),
        message: "Time must be in HH:MM format (24-hour).",
      }
    },
  message: {
    type: String,
    required: [true, "Message Required!"],
    minLength: [10, "Message must contain at least 10 characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);