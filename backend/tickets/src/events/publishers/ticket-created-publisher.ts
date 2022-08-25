import { Subjects, TicketCreatedEvent, Publisher } from "@zura99tickets/common";

Subjects;

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  /* we are doing both value assignment and type bcoz we don't want to
       change the value of subject (it's similar to data type "final" in Dart)
    */
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
