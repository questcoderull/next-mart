"use server";

import dbConnect, { collectionName } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionName.USER).insertOne(payload);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
