import { aiTxt } from "@/lib/ai-facts";

export function GET() {
  return new Response(aiTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
