import dbConnect from "@/lib/dbConnect";

export async function GET() {
  // Random 10 items
  const data = await dbConnect("watches")
    .aggregate([{ $sample: { size: 20 } }])
    .toArray();

  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("watches").insertOne(postedData);
  return Response.json(result);
}
