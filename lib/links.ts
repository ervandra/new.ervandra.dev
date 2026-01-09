// Contact & booking links
// Set these in .env.local or environment variables:
// NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/yourphone
// NEXT_PUBLIC_BOOK_INTRO_URL=https://cal.com/yourusername
// NEXT_PUBLIC_EMAIL_URL=mailto:your@email.com

export const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/6281234567890";
export const BOOK_INTRO_URL = process.env.NEXT_PUBLIC_BOOK_INTRO_URL ?? "/contact";
export const EMAIL_URL = process.env.NEXT_PUBLIC_EMAIL_URL ?? "mailto:hello@ervandra.dev";