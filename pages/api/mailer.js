const nodemailer = require("nodemailer");
require("dotenv").config();

const host = process.env.MAIL_HOST;
const port = process.env.MAIL_PORT;
const address = process.env.MAIL_ADDRESS;
const password = process.env.MAIL_PASSWORD;

const mailer = (req, res) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: false,
      auth: {
        user: address,
        pass: password,
      },
    });

    const message = {
      from: `${req.body.email} <${req.body.name}>`,
      to: address,
      subject: req.body.subject,
      text: `${req.body.message} | from: ${req.body.email}`,
      html: `<div>${req.body.message}<div><p>from: ${req.body.name}</p>`,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      if (!err) {
        console.log("Your message was sent!");
        res.status(200).send(info);
      }
    });
  });
};

export default mailer;
