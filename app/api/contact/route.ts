// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, location, message } = body;

    if (!name || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to Sanity
    await writeClient.create({
      _type: "contactSubmission",
      name,
      email: email || "",
      phone,
      service,
      location: location || "",
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
