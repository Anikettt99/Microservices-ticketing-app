// without using base listner class

import nats, { Message, Stan } from "node-nats-streaming";
import { randomBytes } from "crypto";

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

  // configuring options
  //setManualAckMode by setting this true ..NATS will not acknowledgment automatically
  // so it will wait some amount of tym and then send this data to other instance in same
  // queue grp..so we have to manualy send the acknowledgment
  //const options = stan.subscriptionOptions().setManualAckMode(true);
  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable() // this require for very first tym (to fetch all events) (in context of receiving missing events)
    .setDurableName("ordered-service");

  // be default..if we disconnect any client then NATS will wipe out its history
  // so if we use queue group then we can prevent NATS from doing this
  const subscription = stan.subscribe(
    "ticket:created",
    "order-service-queue-group",
    options
  );

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();
    // all this function can be checked in type defination file by ctrl+click on Message
    if (typeof data === "string") {
      console.log(`Received event #${msg.getSequence()} , with data: ${data}`);
    }

    msg.ack(); // sending acknowledgement manually
  });
});

// when we hit restart or close (CTRL + C) in terminal
// then emit the close event which is handled at line number 14
process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
