import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, service, budget, message } = result.data;

    // Send via Web3Forms (free email API)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `New inquiry from ${name} — ${service}`,
        from_name: "Syntrix Contact Form",
        name,
        email,
        company: company || "N/A",
        service,
        budget: budget || "Not specified",
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
