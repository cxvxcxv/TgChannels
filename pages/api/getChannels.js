import mongoose from 'mongoose';
import { connectMongo, disconnectMongo } from '../../utils/workMongo';

export default async function getChannels(req, res) {
    await connectMongo();
    const channels = mongoose.models.channels;
    try {
        const response = await channels.find();
        await disconnectMongo();
        await res.status(200).json(response);
    } catch(e) {
        await disconnectMongo();
        await res.status(500).json(e);
    }
}