import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { isAuthenticated, userId } = await auth();
  if (!isAuthenticated) {
    return NextResponse.json({ error: "Error: No signed in user" }, { status: 401 });
  }
  return Response.json({ userId });
}

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated || !userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userData = await req.json();
    const body = { user_id: userId, ...userData };

    const { data, error } = await supabase.from("users").insert([body]).select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
