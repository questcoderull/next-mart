import dbConnect, { collectionName } from "@/lib/dbConnect";

export async function GET() {
  try {
    const data = await dbConnect(collectionName.watches)
      .find({})
      .sort({ sales: -1 })
      .limit(6)
      .toArray();

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Failed to fetch best selling watches" });
  }
}
