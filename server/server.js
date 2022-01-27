// server/index.js
"use strict";

require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const cors = require('cors')
const app = express();

app.use(cors());

//What do I use as middleware instead of static??
// app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(messageData, res) {
  const {name, email, subject, message} = messageData;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USERNAME, // gmail username
      pass: process.env.GMAIL_PASSWORD, // gmail password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${name} ${email}`, // sender address
    to: "ecamilebabb@gmail.com", // list of receivers
    subject, // Subject line
    text: message
  });

  console.log("Message sent: %s", info.messageId);

  res.send(201);
}

app.post('/', (req, res) => {
  sendEmail(req.body, res).catch();
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});