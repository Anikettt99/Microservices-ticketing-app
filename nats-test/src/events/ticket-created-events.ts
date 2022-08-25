import { Subjects } from "./subjects";

/* When we use the abstract class Listener ... then we expecting a argument to 
   for it , which will be passed from it's sub class (when we extend the Listener class)
   so this interface will define the generic type for that argument
*/
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
