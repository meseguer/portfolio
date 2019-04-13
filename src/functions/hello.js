const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  try {
    const { name, email, message } = JSON.parse(event.body);
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'tod48@ethereal.email', // generated ethereal user
        pass: 'MZtBHX5Z6WJQ12jktK', // generated ethereal password
      },
    });
    const mailOptions = {
      from: 'foo@example.com',
      to: 'jinamus@getnada.com',
      subject: 'Freelancing Request',
      html: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
    };

    const response = await transporter.sendMail(mailOptions);
    return {
      statusCode: 201,
      body: `We waited ${JSON.stringify(response)}`,
    };
  } catch (e) {
    return {
      statusCode: 201,
      body: e,
    };
  }
};
