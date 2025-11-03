import { createClient } from "@/utils/supabase/server";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  if (!search) {
    return NextResponse.json({ error: "Missing search job title " }, { status: 400 });
  }

  try {
    const { data } = await axios.get(`${process.env.RAPIDAPI_URL}`, {
      params: {
        query: search,
        page: 1,
        num_pages: 1,
        date_posted: "all",
      },
      headers: {
        "x-rapidapi-key": `${process.env.RAPIDAPI_KEY}`,
        "x-rapidapi-host": `${process.env.RAPIDAPI_HOST}`,
      },
    });

    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Request failed " }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const supabase = await createClient();
    const { isAuthenticated, userId } = await auth();

    if (!isAuthenticated || !userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();


    if (!body.job_id) {
      return NextResponse.json({ error: "Missing job_id" }, { status: 400 });
    }

    const { data: existingJob } = await supabase.from("jobs").select("job_id").eq("job_id", body.job_id).single();

    if (!existingJob) {
      const { error: jobError } = await supabase.from("jobs").insert([body]);
      if (jobError) {
        return NextResponse.json({ error: jobError.message }, { status: 400 });
      }
    }

    const { data: userJob, error: userJobError } = await supabase
      .from("user_jobs")
      .insert([
        {
          user_id: userId,
          job_id: body.job_id,
          status: body.job_state,
        },
      ])
      .select("*");

    if (userJobError) {
      return NextResponse.json({ error: userJobError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Job added and linked", userJob }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
