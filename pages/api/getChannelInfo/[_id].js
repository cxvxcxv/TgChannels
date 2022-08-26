import mongoose from "mongoose";
import { connectMongo, disconnectMongo } from "../../../utils/workMongo";
export default async function getChannelInfo(req, res) {
  const { _id } = req.query;
  await connectMongo();
  const channels = mongoose.models.channels;
  try {
    const channelInfo = await channels.findById(_id);
    await disconnectMongo();
    await res.json(channelInfo);
  } catch (e) {
        await disconnectMongo();
        await res.json(e);
  }
}