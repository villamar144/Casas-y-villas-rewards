const express = require('express');
const User = require('../models/users');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login de usuario
router.post('/login', async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        const user = await User.findOne({ correo, contraseña });
        if (!user) return res.status(400).json({ message: "Credenciales incorrectas" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener perfil de usuario
router.get('/profile/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;