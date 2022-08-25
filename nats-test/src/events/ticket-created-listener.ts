import { Message } from "node-nats-streaming";
import { Listener } from "./base-listener";
import { Subjects } from "./subjects";
import { TicketCreatedEvent } from "./ticket-created-events";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  /* typecript will make sure subject will equal to subject defined
       in the TicketCreatedEvent
    */
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  /*
  TicketCreatedEvent['data'] =  {
    id: string;
    title: string;
    price: number;
  }
  
  */

  /*
  if we assign anyother interface to data property then..then typescript
  will check data portion of <TicketCreatedEvent> and it is defined in Base class(Listener class)
  {abstract onMessage(data: T["data"], msg: Message): void;} so typescript will
  compare the interface with T["data"]
  */
  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);

    msg.ack();
  }
}
