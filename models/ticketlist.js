const mongoose = require('mongoose');
const ticketListSchema = new mongoose.Schema({
customerName: {
        type: String,
        required: true
},
customerPhone: {
    type: String,
    required: true
},
customerEmail: {
    type: String,
    required: true
},
itemType: {
    type: String,
    default: "Shoes"
},
brand: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
severity: {
    type: String,
    required: true
},
cost: {
    type: String,
    required: true
},
assignedTo: {
    type: String,
    required: true
},
status: {
    type: String,
    default: "Open"
},
date: {
    type: Date,
    default: Date.now
}
})
module.exports = mongoose.model('TicketList',ticketListSchema,'tickets');