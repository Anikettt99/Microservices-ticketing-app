import { Subjects, TicketUpdatedEvent, Publisher } from "@zura99tickets/common";

Subjects;

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  /* we are doing both value assignment and type bcoz we don't want to
       change the value of subject (it's similar to data type "final" in Dart)
    */
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
