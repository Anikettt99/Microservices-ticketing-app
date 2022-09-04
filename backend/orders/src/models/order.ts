import mongoose from "mongoose";

/*
  interfaces are script out when code is executed
  interface are only for type checking by typescript 
  e.g "string" is typescript type whereas "String" is
  actual string constructor
*/

//interface for creating Order Doc
interface OrderAttrs {
  userId: string;
  status: string;
  expiresAt: Date;
  // ticket: TicketDoc;
}

// interface for returned doc by mongoDb (both can be different)
interface OrderDoc extends mongoose.Document {
  userId: string;
  status: string;
  expiresAt: Date;
  // ticket: TicketDoc;
}

// interface for overall properties (like any method) of order model
interface OrderModel extends mongoose.Model<OrderDoc> {
  build(attrs: OrderAttrs): OrderDoc;
}

// schema of instance of order
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        (ret.id = ret._id), delete ret._id;
      },
    },
  }
);

orderSchema.statics.build = (attrs: OrderAttrs) => {
  return new Order(attrs);
};

// model is a generic function
const Order = mongoose.model<OrderDoc, OrderModel>("Order", orderSchema);

export { Order };
