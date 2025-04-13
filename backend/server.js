const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categories');
const { authenticateToken } = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/categories', authenticateToken, categoryRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});