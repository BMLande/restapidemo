const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    connect : async function connect() {
        try {
           await mongoose.connect(process.env.DB_HOST + process.env.DB_NAME);
        } catch (error) {
            throw error;
        }
    }
}


