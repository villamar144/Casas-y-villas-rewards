const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


//const userRoutes = require('./routes/userRoutes');

app.use(cors({
    origin: 'https://casas-y-villas-rewards.onrender.com', // Reemplaza con tu URL de Netlify
  }));


//const app = express();
//app.use(cors());
//app.use(express.json());
//app.use('/api/user', userRoutes);

// Conectar a MongoDB

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const uri = process.env.MONGODB_URI; // Asegúrate de que esté configurado en tu .env
mongoose.connect(uri)
    .then(() => console.log("MongoDB Atlas connected successfully"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// Routes
app.get('/', (req, res) => {
    res.send('API en funcionamiento');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en: ${port}`);
});
