import nats, { Message, Stan } from "node-nats-streaming";
import { randomBytes } from "crypto";
import { Listener } from "./events/base-listener";
import { TicketCreatedListener } from "./events/ticket-created-listener";

// it will clear the extra stuff from console
console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:32219",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  stan.on("close", () => {
    console.log("NATS connection closed!");
    process.exit();
  });

  new TicketCreatedListener(stan).listen();
});

// when we hit restart or close (CTRL + C) in terminal
// then emit the close event which is handled at line number 14
process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
