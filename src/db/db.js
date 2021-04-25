import mongoose from 'mongoose';

export default  mongoose.connect('mongodb://localhost:27017/igor', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, (err) => {
        if (!err) {
            console.log(`Succesfully connected to DB`);
        } else {
            console.log(`Error connecting to DB`)
        }
    });