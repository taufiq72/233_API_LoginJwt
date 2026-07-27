const { Komik } = require('../models');

async function getAllKomik(req, res) {
    try {
        const komik = await Komik.findAll();
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error fetching komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getKomikById(req, res) {
    const { id } = req.params;
    try {
        const komik = await Komik.findByPk(id);
        if (!komik) {
            return res.status(404).json({ error: 'Komik not found' });
        }
        res.status(200).json(komik);
    } catch (err) {
        console.error('Error fetching komik by ID:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createKomik(req, res) {
    const { title, description, author } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    try {
        const newKomik = await Komik.create({ title, description, author });
        res.status(201).json(newKomik);
    } catch (err) {
        console.error('Error creating komik:', err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}