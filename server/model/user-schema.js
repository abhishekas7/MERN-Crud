import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})


autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');

const User = mongoose.model('users',userSchema);
export default User;
