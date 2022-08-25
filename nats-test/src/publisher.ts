import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";

// it will clear the extra stuff from console
console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:32219",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  const publisher = new TicketCreatedPublisher(stan);
  try {
    // publishing an event on NATS Streaming Server is an asynchronous operation
    await publisher.publish({
      id: "123",
      title: "concery",
      price: 20,
    });
  } catch (error) {
    console.error();
  }
  /*
  // nats can only share string or raw data i.e json
  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20,
  });

  // "ticket:created" is subject or channel name
  stan.publish("ticket:created", data, () => {
    console.log("Event published");
  });*/
});
