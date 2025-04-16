const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());  // pour parser les données JSON

// Route pour tester si le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Serveur en cours d\'exécution');
});

// Route pour envoyer un email
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 1025,  // Port de MailDev
    secure: false,
  });

  const mailOptions = {
    from: email,
    to: 'tonadresse@mail.com',  // Remplace par l'adresse de ton choix
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email envoyé avec succès ✅' });
  } catch (error) {
    console.error('Erreur d\'envoi de l\'email :', error);
    res.status(500).send({ message: 'Erreur lors de l’envoi ❌' });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!emailRegex.test(email)) {
    return res.status(400).send('❌ Adresse e-mail invalide');
  }

  // Continue avec l'envoi d'e-mail via Nodemailer...
});
