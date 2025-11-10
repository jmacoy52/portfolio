const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Route to handle contact form submission
app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    subject: `New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
