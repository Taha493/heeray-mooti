const express = require('express');
const cors = require('cors');  // Import cors
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3001',  // Allow requests only from this origin
  methods: ['GET', 'POST'],          // Allow only specific HTTP methods
  allowedHeaders: ['Content-Type']   // Allow only specific headers
};

app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up the SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP service provider
  auth: {
    user: 'taha.tsf123@gmail.com',
    pass: 'TahaMahmood'
  }
});

// Endpoint to send emails
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'taha.tsf123@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Email sent', info });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
