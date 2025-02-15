import mongoose from 'mongoose';
import 'dotenv/config'


const ConnectedDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        .catch(err => console.error("Error during connected DB URL",err))
        console.log('Connected to MongoDB successfully!!!')
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1)
    }
}

export default ConnectedDb;