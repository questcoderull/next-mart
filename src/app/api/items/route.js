import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect("watches").find({}).toArray();

  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("pratice_data_for_nextjs").insertOne(
    postedData
  );

  return Response.json(result);
}
