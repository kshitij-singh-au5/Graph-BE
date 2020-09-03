const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
    name: { type: String},
    criteria: { type: String  },
    value: { type: Number  },
    everyday: { type: String  },
    email: { type: String  }
    
});

module.exports = mongoose.model("alerts", alertSchema)