
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },

});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
