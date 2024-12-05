require('dotenv').config();
const express = require('express');
const path = require('path');
const { fetchMessages } = require('./src/lib/fetchMessages');
const { setupRabbitMQ } = require('./src/lib/rabbitmq');

const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos do frontend buildado
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter mensagens em JSON
app.get('/:name/:phoneNumber/messages', async (req, res) => {
  const { name, phoneNumber } = req.params;
  try {
    const messages = await fetchMessages(name, phoneNumber);
    if (messages === null) {
      return res.status(404).json({ error: 'Instance not found' });
    }
    return res.json({ messages });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Qualquer outra rota, devolverá o index.html do React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar RabbitMQ
setupRabbitMQ().catch(console.error);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
