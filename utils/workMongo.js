import mongoose from "mongoose";

export async function connectMongo() {
    await mongoose.connect(
        "mongodb+srv://alisher:1@cluster0.afj8j1d.mongodb.net/Channels?retryWrites=true&w=majority"
      );
}

export async function disconnectMongo() {
    await mongoose.connection.close();
}