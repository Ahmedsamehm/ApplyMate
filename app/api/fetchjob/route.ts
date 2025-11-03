import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase.from("user_jobs").select("*, jobs(*)").eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function PUT(request: Request) {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status } = await request.json();

  if (!id || !status) {
    return NextResponse.json({ error: "ID and status are required" }, { status: 400 });
  }

  const { data, error } = await supabase.from("user_jobs").update({ status }).eq("id", id).eq("user_id", userId).select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(request: Request) {
  const supabase = await createClient();
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const { error } = await supabase.from("user_jobs").delete().eq("id", id).eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Job application deleted successfully" }, { status: 200 });
}
