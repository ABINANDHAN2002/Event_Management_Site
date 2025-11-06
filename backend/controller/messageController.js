import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, date, time, message } = req.body;
    if (!name || !email || !subject || !date || !time || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const msg = await Message.create({ name, email, subject, date, time, message });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully!",
      data: msg,
    });
  } catch (error) {
    console.error("Error saving message:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: messages.join(" ") });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
