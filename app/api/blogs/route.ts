import { BLOGGER_URL } from "@/utils/constant";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await Promise.allSettled(
      BLOGGER_URL.map((url) => 
        // Add { cache: 'no-store' } to ensure we get fresh data every time
        fetch(url, { cache: 'no-store' }).then((res) => res.json())
      )
    );

    const blogs = results
      .filter((r) => r.status === "fulfilled")
      // @ts-ignore - Typescript doesn't know the structure of the promise value yet
      .map((r) => r.value);

    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}