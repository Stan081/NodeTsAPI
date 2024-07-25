// Define an interface representing a document in MongoDB.
export default interface User extends Document {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    country: string;
    platform: string;
  }