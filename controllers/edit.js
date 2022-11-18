const TicketList = require('../models/ticketlist')

module.exports = {
    deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    closeTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndUpdate(
            id,
            {
                status: "Closed"
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    },
    editTicket: async (req, res) => {
        try {
            let ticketToUpdate = await TicketList.findById(req.params.id).lean()
            console.log(ticketToUpdate)

            if (!ticket) {
                return res.render(index.ejs)
            } else {
                ticketToUpdate = await TicketList.findOneAndUpdate({_id: req.params.id},
                    req.body, {
                        new: true,
                        runValidators: true,
                    })
            } res.redirect('/')
        } catch (err) {
        console.log(err);
    }}
}
