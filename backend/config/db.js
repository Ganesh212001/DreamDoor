const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.REACT_APP_MONGO_URI);
        console.log("MongoDB Connected: Your Database Is Connected On MongoDB Atlas".green)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB