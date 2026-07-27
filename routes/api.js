const express = require('express');
const router = express.Router();
const { Komik } = require('../models');
const komikController = require('../controller/komikcontroller'); // <-- TAMBAHKAN BARIS 

router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;