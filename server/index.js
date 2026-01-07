// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');   // <-- ADD THIS
const authRoutes = require('./routes/auth'); // <-- ADD THIS
const userRoutes = require('./routes/books'); // <-- ADD THIS
const adminRoutes = require('./routes/admin'); // <-- ADD THIS
const app = express();

app.use(cors());
app.use(express.json());

// ---------- CONNECT TO MONGODB ------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));
// ------------------------------------------


// test route
app.get('/api/ping', (req, res) => res.json({ msg: 'pong' }));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
