import mongoose from "mongoose"
import assert from "node:assert"

// caching for local development
let cached = localStorage.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function makeSureDbIsReady() {
    if (cached.conn) {
        return cached.conn;
    }

    const MONGODB_URI = process.env.MONGODB_URI;
    assert(
        MONGODB_URI,
        "Please define the MONGODB_URI environment variable insed .env.local"
    );

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { bufferComands: false});
    }

    cached.conn = await cached.promise;
    return cached.conn;
}