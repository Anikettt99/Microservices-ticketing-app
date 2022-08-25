import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@zura99tickets/common";
import { body } from "express-validator";
import { Ticket } from "../models/tickets";
import { TicketCreatedPublisher } from "../events/publishers/ticket-created-publisher";
import { natsWrapper } from "../nats-wrapper";
const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price, userId } = req.body;
    // using ! for req.currentUser coz we have already check this in
    // requireAuth middleware ..but typescript is not checking requireAuth Middleware
    // so we are forcing typescript ki hai bhai define
    /* const ticket = Ticket.build({
      title,
      price,
      userId: req.currentUser!.id,
    });*/

    const ticket = Ticket.build({
      title,
      price,
      userId: userId,
    });

    await ticket.save();

    new TicketCreatedPublisher(natsWrapper.client_get).publish({
      id: ticket.id,
      title: ticket.title,
      price: ticket.price,
      userId: ticket.userId,
    });

    res.status(201).send(ticket);
  }
);

export { router as createTicketRouter };
