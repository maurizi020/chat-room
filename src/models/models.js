import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  timestamp: Number,
  message: String,
  typography: String,
  color: String,
});

const chatSchema = new Schema({
  recipient: String,
  messages: [messageSchema],
});

const userSchema = new Schema({
  name: String,
  id: String,
  chats: [chatSchema],
});

const Users = model('Users', userSchema);
const Chats = model('Chats', chatSchema);
const Messages = model('Messages', messageSchema);

export {
  Users,
  Chats,
  Messages,
};
