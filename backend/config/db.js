const mongoose = require('mongoose')

const connectDB = () => {
        mongoose.set('strictQuery', false);
        const conn = mongoose.connect(`${process.env.REACT_APP_MONGO_URI}`).then(()=>{
            console.log("database is connected")
        }).catch( (error) => {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    })
}

module.exports = connectDB


