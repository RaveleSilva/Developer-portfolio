const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'ravele.cs@gmail.com',
        pass: 'Ravele126790'
    }
});


app.post('/enviar-email', (req, res) => {
    const nome = req.body.name;
    const email = req.body.email;
    const mensagem = req.body.message;

    const mailOptions = {
        from: 'ravele.cs@gmail.com',
        to: 'ravele.cs@gmail.com',
        subject: 'Formulário - Portfólio',
        text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Ocorreu um erro ao enviar o email.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('O email foi enviado com sucesso!');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});