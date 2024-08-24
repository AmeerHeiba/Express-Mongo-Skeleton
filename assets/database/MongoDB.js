const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));
