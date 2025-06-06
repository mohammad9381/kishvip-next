const query = require("../db/db-connection");
const db = require("../model");
const Ticket = db.ticker;
class TicketController {
  async setTicket(invoice_id, cellphone, resp) {
    await Ticket.create({
      invoice_id: invoice_id,
      serviceUniqueId: resp.serviceUniqueId,
      sansUniqueId: resp.sansUniqueId,
      licenseUniqueId: resp.licenseUniqueId,
      ticketTypeUniqueId: resp.ticketTypeUniqueId,
      title: resp.title,
      link: resp.link,
    });
  }
}

export default TicketController;
