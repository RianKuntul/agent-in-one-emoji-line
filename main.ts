import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Your Agent in One Emoji — v2: 🧭
// Revision: the wand (v1) says "magic happens" but says nothing about HOW
// the agent works. A compass is sharper: the agent charts its own course
// toward a goal, orients itself, and navigates multi-step work on its own —
// direction-finding is what an agent does, and the glyph reads instantly
// at small size while staying far from the obvious robot or smiley.
const EMOJI = "🧭";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
