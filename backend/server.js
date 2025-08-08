const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill all fields." });
  }

  // Here you can add code to save the data to a database or send an email

  console.log("Contact form data received:", { name, email, message });

  return res.json({ message: "Thank you for reaching out! I will get back to you soon." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
