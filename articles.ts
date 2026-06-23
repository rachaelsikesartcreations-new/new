import { IMG } from "./images";

export type Article = {
  slug: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  title: string;
  sub: string;
  author: { name: string; role: string };
  cover: string;
  body: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "smart-expiration-alerts",
    tag: "Product Update",
    tagColor: "#1F4E79",
    date: "May 28, 2026",
    readTime: "4 min read",
    title: "Introducing Smart Expiration Alerts",
    sub:
      "RepWallet now surfaces credential expirations at 60, 30, and 7 days with intelligent prioritization based on your upcoming case schedule.",
    author: { name: "Priya Shah", role: "Product Lead, RepWallet" },
    cover: IMG.monitorScreen,
    body: [
      {
        type: "p",
        text:
          "Credentials don't expire on a tidy schedule. A flu shot lapses three days before a high-volume week. A fire-safety attestation rolls over the morning of a case at a hospital that won't let you badge in without it. Today we're shipping Smart Expiration Alerts to take the guesswork out of that.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        text:
          "RepWallet watches every document in your vault and cross-references it against your team's case calendar and the hospital-specific requirements we already track. When something is about to lapse, you get a notification — but not all notifications are equal.",
      },
      {
        type: "list",
        items: [
          "60-day alerts arrive in your weekly digest, low-priority.",
          "30-day alerts trigger a push notification and add a task to your dashboard.",
          "7-day alerts page the rep, their manager, and surface a one-tap renewal flow for every supported credentialing system.",
        ],
      },
      { type: "h2", text: "Prioritized against your real schedule" },
      {
        type: "p",
        text:
          "An expiring credential matters more if it gates a case you have on the calendar in the next two weeks. Smart Alerts lift those to the top of your list automatically, and push everything else down so the rep isn't drowning in noise.",
      },
      {
        type: "quote",
        text:
          "Our reps used to find out a credential lapsed when they were standing at the badge desk. Now they renew the week before, in two taps, from the car.",
      },
      { type: "h2", text: "Available today" },
      {
        type: "p",
        text:
          "Smart Expiration Alerts are on by default for every team. You can tune thresholds and channels per credential type in Settings → Alerts.",
      },
    ],
  },
  {
    slug: "hidden-cost-of-credentialing-friction",
    tag: "Blog",
    tagColor: "#2E9E72",
    date: "May 14, 2026",
    readTime: "6 min read",
    title: "The Hidden Cost of Credentialing Friction",
    sub:
      "Medical device reps spend hours each week managing credentials across fragmented platforms. Here's what that actually costs—and what we're doing about it.",
    author: { name: "Maria Chen", role: "Head of Customer Success" },
    cover: IMG.teamLaptops,
    body: [
      {
        type: "p",
        text:
          "We surveyed 312 medical device reps last quarter about how they spend their week. The answers weren't surprising to anyone who's lived the job — but the aggregate cost was.",
      },
      { type: "h2", text: "The numbers" },
      {
        type: "list",
        items: [
          "Reps spend an average of 6.4 hours per week on credentialing tasks.",
          "Of that, 4.1 hours is administrative overhead — re-uploading the same PDF, re-entering the same details, chasing the same renewal email.",
          "11% of reps reported losing at least one case in the last 12 months due to a credential issue they couldn't resolve in time.",
        ],
      },
      { type: "h2", text: "Why it's expensive" },
      {
        type: "p",
        text:
          "The visible cost is the hours. The hidden cost is the cases — and the relationships behind them. A bumped case isn't just lost revenue; it's a surgeon who learns to call your competitor next time because your rep didn't show up cleared.",
      },
      {
        type: "quote",
        text:
          "The market doesn't reward reps for being great at paperwork. But the market punishes you when paperwork keeps you out of the room.",
      },
      { type: "h2", text: "What we're doing about it" },
      {
        type: "p",
        text:
          "RepWallet is built around the premise that compliance work should be invisible. One vault, one renewal flow, one dashboard — and a copilot that knows what's coming up next week. The goal isn't to make reps better at credentialing. It's to make credentialing stop being something reps think about.",
      },
    ],
  },
  {
    slug: "why-were-building-repwallet",
    tag: "Company",
    tagColor: "#32699A",
    date: "April 30, 2026",
    readTime: "5 min read",
    title: "Why We're Building RepWallet",
    sub:
      "Our founding story and the problem we set out to solve for the reps who make the operating room work.",
    author: { name: "Jordan Reyes", role: "Co-founder & CEO" },
    cover: IMG.surgeryWide,
    body: [
      {
        type: "p",
        text:
          "RepWallet started in an OR parking lot in November of 2023. I was a regional manager for a spine distributor at the time, and one of our reps was on hold with a credentialing portal at 6:42am, ten minutes before a case he'd prepped for three weeks. The portal had quietly flagged a missing TB test that he'd uploaded six months earlier. He missed the case. The surgeon called my competitor that afternoon.",
      },
      {
        type: "p",
        text:
          "That story is unremarkable in our industry. Every rep I know has a version of it. What was remarkable was how many tools existed to track this stuff — and how none of them actually solved the problem.",
      },
      { type: "h2", text: "The work the field actually does" },
      {
        type: "p",
        text:
          "Medical device reps move the cases that move medicine forward. They're in the OR at 7am, on the phone with hospital credentialing offices at 9, prepping trays at 2, and uploading the same vaccination record to a fifth vendor portal at 8pm. The work is real. The infrastructure underneath it isn't.",
      },
      {
        type: "quote",
        text:
          "We didn't want to build another credentialing portal. We wanted to build the layer that makes the existing ones invisible.",
      },
      { type: "h2", text: "What we're building" },
      {
        type: "p",
        text:
          "One vault. One renewal flow. One dashboard across every hospital, every credentialing system, and every rep. A copilot that drafts the email, surfaces the case prep, and flags the missing item the night before — not the morning of.",
      },
      {
        type: "p",
        text:
          "We're early. There's a lot left to build. But the reps who depend on RepWallet today tell us the same thing: for the first time, the paperwork is somebody else's problem.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
