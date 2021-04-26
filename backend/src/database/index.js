const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}

module.exports = db;