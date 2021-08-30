import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  userName: String,
  timestamp: Number,
  message: String,
  typography: String,
  color: String,
});

const Messages = model('Messages', messageSchema);

export default Messages;
