// app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/services");
    revalidatePath("/gallery");
    revalidatePath("/blog");
    revalidatePath("/contact");

    return NextResponse.json({ revalidated: true });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
