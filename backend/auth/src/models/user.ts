import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface that describes the properties
// that are requried to create a new User

interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a User model has

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  /* createdAt: string;
  updatedAt: string;*/
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      // doc is mongoose document which is being converted
      // ret is plain object representation which has been converted
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

// we using normal function because, when we put together middleware function
// we got access to document which is being saved in db as this
// if we use arrow function then the value of this will be overwritten , and it
// equal to context of this file
// this middleware will be called when we use save() function
userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    // is checking this if we update details using save() ,
    // so we dont wanna hash the password again
    // isModified("password") return true if we saving user for the first time
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
