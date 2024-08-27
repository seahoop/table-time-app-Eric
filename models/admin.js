import mongoose from 'mongoose';


const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true }
});

const Admin = mongoose.model('Admin', adminSchema);


adminSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword;
    }
});


export default Admin;
