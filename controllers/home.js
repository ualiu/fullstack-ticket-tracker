const TicketList = require('../models/ticketlist')

module.exports = {

    // Getting all available objects (tickets) from DB 
    getIndex : async (req, res) => {
        try {
            const tickets = await
            TicketList.find()
            res.render("index.ejs", { ticketList: tickets });
        } catch (err) {
            if (err) return res.status(500).send(err);
        }
    },

    //Creating an object (ticket) on the DB when someone submits a form
    createTicket: async (req, res) => {
        const newTicket = new TicketList(
            {
                subject: req.body.subject,
                description: req.body.description,
                severity: req.body.severity,
                assignedTo: req.body.assignedTo,
                status: req.body.status,
            });

    // Saving the ticket in the DB and reloading the page        
        try {
            await newTicket.save();
            console.log(newTicketk)
            res.redirect("/"); //we can redirect to a different page if needed
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
}