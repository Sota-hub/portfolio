const nodemailer = require("nodemailer");
require("dotenv").config();

const password = process.env.PASSWORD;

const mailer = (req, res) => {
  // console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: true,
    auth: {
      user: "portfolioa288@gmail.com",
      pass: password,
    },
  });

  const message = {
    from: req.body.email,
    to: "portfolioa288@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: `${req.body.subject} | ${req.body.message} | from: ${req.body.email}`,
    html: `<h2>${req.body.subject}<h2><div>${req.body.message}<div><p>from: ${req.body.email}</p>`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) res.status(400).send(err);
    if (!err) res.status(200).send(info);
  });
};

export default mailer;
