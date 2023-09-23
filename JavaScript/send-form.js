import express from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ravele.cs@gmail.com',
    pass: 'Ravele126790'
  },
});

app.post('/enviar-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'ravele.cs@gmail.com',
    to: 'ravele.cs@gmail.com',
    subject: 'Contato - Porfolio',
    text: `Nome: ${name}\nEmail:${email}\nMensagem: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar o email');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('Email enviado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
