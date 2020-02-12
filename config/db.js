const mg = require('mongoose');
const link = 'mongodb+srv://Notorious:Notorious88@cluster0-7owqw.mongodb.net/test?retryWrites=true&w=majority';

const  connectDB = async () => {
    return  mg.connect(link, {useNewUrlParser: true, useUnifiedTopology: true})
};

module.exports = connectDB;