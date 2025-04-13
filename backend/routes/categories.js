const express = require('express');
const multer = require('multer');
const db = require('../db');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get all categories
router.get('/', (req, res) => {
  db.all(`SELECT * FROM categories`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add category
router.post('/', upload.single('image'), (req, res) => {
  const { name, itemCount } = req.body;
  const image = req.file?.filename;

  db.run(`INSERT INTO categories (name, itemCount, image) VALUES (?, ?, ?)`, [name, itemCount, image], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

// Edit category
router.put('/:id', upload.single('image'), (req, res) => {
  const { name, itemCount } = req.body;
  const image = req.file?.filename;
  const id = req.params.id;

  db.run(
    `UPDATE categories SET name = ?, itemCount = ?, image = COALESCE(?, image) WHERE id = ?`,
    [name, itemCount, image, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updated: this.changes });
    }
  );
});

module.exports = router;