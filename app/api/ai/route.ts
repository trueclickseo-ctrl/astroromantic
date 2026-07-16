import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: max 5 requests per hour per IP
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within the last hour
  const recentTimestamps = timestamps.filter((t) => now - t < oneHour);
  if (recentTimestamps.length >= 5) {
    return false;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "anonymous_ip";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { result: "Rate limit exceeded (5 requests per hour). Please try again later." },
        { status: 429 }
      );
    }

    const { slug, sender, recipient, tone, keywords } = await req.json();

    // Fallback template library - highly custom and warm
    const fallbackTemplates: Record<string, string[]> = {
      "love-letter-generator": [
        `My Dearest {recipient},\n\nEvery day with you feels like a chapter in a story I never want to end. When I think of {keywords}, I am reminded of how lucky I am to have you. Your presence fills my days with meaning, warmth, and light.\n\nWith all my love,\n{sender}`,
        `Dearest {recipient},\n\nI wanted to write you something that captures what my heart feels every time you enter the room. I cherish our moments together, especially {keywords}. You are my anchor, my joy, and my favorite part of every day.\n\nForever yours,\n{sender}`
      ],
      "romantic-message-generator": [
        `Good morning, {recipient}! Just thinking of {keywords} and sending you a little warmth to start your day. Love you! - {sender}`,
        `Hey {recipient}, just wanted to remind you how much you mean to me. {keywords} is on my mind, and I can't wait to see you later. - {sender}`
      ],
      "wedding-vow-generator": [
        `I, {sender}, take you, {recipient}, to be my partner in life. I promise to support your dreams, laugh with you during the good times, and stand by you in the storms. Our memories of {keywords} will always be the bedrock of our union. I choose you today and every day.`,
        `{recipient}, from the moment we shared {keywords}, I knew our paths were bound. I vow to love you without reservation, to respect you, and to grow with you through all the years ahead.`
      ],
      "anniversary-wish-generator": [
        `Happy Anniversary, {recipient}! It's been an incredible journey since we started. Thinking back to {keywords} makes me appreciate how far we've come. Here's to many more years of laughter and love. - {sender}`,
        `To my favorite person, {recipient}: Happy Anniversary. Thank you for being my rock, my partner, and the one who laughs at my jokes. I'll always cherish {keywords}. With love, {sender}`
      ],
      "proposal-speech-generator": [
        `{recipient}, when we first met, I never imagined how completely you would change my world. Looking back at {keywords}, I realize that every step of my life led me to you. I want to build a lifetime of these moments with you. Will you marry me?`,
        `{recipient}, you make me laugh harder, think deeper, and love more than I ever thought possible. Our journey, especially {keywords}, has been the greatest adventure of my life. I want this adventure to last forever. Will you do me the honor of becoming my spouse?`
      ]
    };

    const templates = fallbackTemplates[slug] || fallbackTemplates["love-letter-generator"];
    const seed = (sender.length + recipient.length + keywords.length) % templates.length;
    let result = templates[seed];

    // Format tags
    result = result
      .replace(/{recipient}/g, recipient || "Love")
      .replace(/{sender}/g, sender || "Me")
      .replace(/{keywords}/g, keywords || "the laughter we share");

    return NextResponse.json({ result });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
