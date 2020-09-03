const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const graphSchema = new Schema({
    high: Array,
    low: Array 
});

module.exports = mongoose.model("graphs", graphSchema)