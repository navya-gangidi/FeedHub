const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*The above line is equivalent to:
    const {Schema} = mongoose;
    This is called destructuring property in Javascript. */

const userSchema = new Schema({
    googleId: String,
    credits: {
        type: Number,
        default: 0
    }
});

mongoose.model('users', userSchema);
//This loads the schema into the model. If we give one argument it means we are fetching.
