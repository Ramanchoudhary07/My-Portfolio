import Contact from "../models/contact.model.js";

export const sendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Please provide name, email, and message" });
    }
    const contact = await Contact.findOne({ email });
    if (contact) {
      contact.message.push(message);
      contact.name = name;
      await contact.save();
      res.status(200).json({ message: "Message sent successfully" });
    } else {
      const newContact = await Contact.create({
        name,
        email,
        message: [message],
      });
      res.status(200).json({ newContact });
    }
  } catch (error) {
    console.log("error in sending contact message: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const fetchAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.log("error in fetching contacts : ", error.message);
    res.status(500).json({ error: error.message });
  }
};
