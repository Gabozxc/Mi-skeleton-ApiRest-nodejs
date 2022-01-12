const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log('DB conectada');
    }
    catch(err){
        console.log('No se pudo conectar la DB')
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;