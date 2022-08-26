import mongoose from "mongoose";
import { connectMongo, disconnectMongo } from "../../utils/workMongo";
const { Schema } = mongoose;

export default async function addChannel(req, res) {
  const { title, all_users, online_users, total_messages } = req.body;
  await connectMongo();
  const channelSchema = new Schema({
    title: String,
    all_users: Number,
    online_users: Number,
    total_messages: Number,
  });

  const channels =
    mongoose.models.channels || mongoose.model("channels", channelSchema);
  const channel = new channels({
    title: title,
    all_users: all_users,
    online_users: online_users,
    total_messages: total_messages,
  });

  channel.save().then(async () => {
    await disconnectMongo();
    res
      .status(200)
      .send(`Channel '${channel.title}' has been successfully created!`);
  });
}
