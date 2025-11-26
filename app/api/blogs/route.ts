import { BLOGGER_URL } from "@/utils/constant";
import { NextResponse } from "next/server";

// 1. ADD THIS LINE to force the route to run on every request
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const results = await Promise.allSettled(
      BLOGGER_URL.map((url) => 
        // 2. Keep this, but 'force-dynamic' above is the real fix
        fetch(url, { cache: 'no-store' }).then((res) => res.json())
      )
    );

    const blogs = results
      .filter((r) => r.status === "fulfilled")
      // @ts-ignore 
      .map((r) => r.value);

    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}