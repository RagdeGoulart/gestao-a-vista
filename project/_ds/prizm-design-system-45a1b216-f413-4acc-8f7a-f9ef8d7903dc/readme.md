# PRIZM Design System

**PRIZM** is the shared design system of **Grupo Itss**, powering products such as
**Docnix**, **PAS**, **Tchello** and others. It is a Brazilian-Portuguese product
suite for quality, compliance and management software. PRIZM is built directly on
**shadcn/ui** conventions (Radix-style primitives, Tailwind v4 token model) with a
custom **blue** brand theme.

This folder is a self-contained recreation of those foundations as runnable HTML/CSS
+ React so design agents can generate on-brand interfaces, prototypes and assets.

---

## Sources

- **Figma:** `PRIZM _ SHADCN.fig` (attached). It is a fork of the
  *shadcn/ui Design System for Figma* by **shadcndesign.com** (© 2025), relabeled
  for Grupo Itss / PRIZM. ~80 component pages + Pro Blocks (Application & Landing),
  Documentation, Typography, Icons and Assets pages.
- The Figma's own documentation chrome uses a **purple** accent (`#9747FF`) — that
  is the *Figma kit's* branding, **not** the PRIZM product theme. The real product
  theme (verified from the Theme Preview frame and the Button component) is
  **blue `#2563EB`** with **Tailwind gray** neutrals.

> If you have access to the real Grupo Itss codebases (Docnix / PAS / Tchello),
> prefer their tokens over this recreation where they differ.

---

## CONTENT FUNDAMENTALS

How PRIZM product copy reads. The source products are **Brazilian Portuguese**;
this kit ships English specimen text but the *voice* rules carry over.

- **Tone:** plain, functional, professional-but-friendly. SaaS-utility, not
  marketing-hype. Sentences are short and direct.
- **Person:** addresses the user as **"you" / "você"** ("You are currently on the
  free plan", "Upgrade your subscription"). First person plural for the product team
  ("Allow us to send you emails").
- **Casing:** **Sentence case** everywhere — buttons, headings, labels, menu items
  ("Create an account", "Report an issue", "Share this document"). Title Case is
  avoided. ALL-CAPS only for tiny eyebrow labels / table micro-headers
  ("OR CONTINUE WITH", "CALORIES/DAY").
- **Buttons:** verb-first and concise — "Upgrade", "Submit", "Cancel", "Create
  account", "Copy Link". One or two words.
- **Labels:** noun, sentence case, terse — "Name", "Email", "Card number",
  "Security Level", "Subject".
- **Helper / description text:** one calm sentence in muted gray, often explaining
  *why* — "Anyone with the link can view this document.", "Manage your cookie
  settings here."
- **Numbers & data:** confident and specific ("$15,231.89", "+2350", "+20.1% from
  last month"). Currency and percentages are first-class.
- **Emoji:** **none.** PRIZM never uses emoji in product UI.
- **Vibe:** calm, dependable, data-dense dashboards; the personality lives in the
  blue accent and crisp spacing, not in playful copy.

---

## VISUAL FOUNDATIONS

- **Color:** Neutral foundation is **Tailwind gray** (`#030712` foreground →
  `#f9fafb` lightest). Brand/primary is **blue-600 `#2563EB`** (hover `#1D4ED8`).
  Semantic: destructive `#DC2626`, warning `#F59E0B`, success `#16A34A`. Charts use
  blue tints plus an **orange `#F97316`** for activity/secondary series. Color is
  defined in **OKLCH** (Tailwind v4 convention). Full light **and** dark themes.
- **Type:** **Inter** for all UI and body (variable, optical sizing on). **Geist**
  as an alternate display face. **Geist Mono** for code, badges and numeric chips.
  Scale: H1 36 / H2 30 / H3 24 / H4 20, body 16 @ 1.625 leading, small/label 14.
  Headings use `letter-spacing: -0.025em` (tracking-tight); body is normal tracking.
- **Spacing:** strict **4px grid**. Cards pad 24px; form gaps 16–24px; control
  inset 12px. Layout containers max ~1280px, sidebar 256px.
- **Radius:** single source `--radius: 0.625rem` (10px); derived sm 6 / md 8 /
  lg 10 / xl 14 / full. Controls (button/input/select) use **md (8px)**; cards use
  **xl (14px)**; pills/badges/avatars use full.
- **Backgrounds:** flat. White (`--background`) in light, near-black gray-950 in
  dark. **No gradients**, no textures, no hand-drawn illustration, no full-bleed
  photography in product chrome. Surfaces are distinguished by 1px borders and very
  subtle shadows, not color washes.
- **Borders:** hairline **1px `--border`** (gray-200 light / white-10% dark) is the
  workhorse separator. Inputs and cards are border-defined.
- **Shadows:** subtle and neutral (black at 5–10% alpha). `shadow-xs` on buttons &
  inputs, `shadow-sm` on cards, larger only for popovers/dialogs. Never colored
  glows.
- **Hover states:** buttons darken (primary → blue-700) or fill with `--accent`
  (ghost/outline → gray-100); table rows tint to `--muted`; links underline with a
  4px offset. Transitions ~180ms `cubic-bezier(0.16,1,0.3,1)`.
- **Press states:** a tiny `translateY(0.5px)` nudge on buttons; no dramatic
  scale/bounce.
- **Focus:** 2-ring system — a `--background`-colored gap ring then a `--ring`
  (blue) ring, or a 3px translucent blue ring on inputs. Always visible, never
  removed.
- **Transparency & blur:** sparing. Overlays use a translucent scrim; `color-mix`
  alpha tints back semantic colors (e.g. success badge = success @ 14%). No heavy
  glassmorphism.
- **Motion:** restrained — fades, small slides, the switch thumb travel. No infinite
  decorative animation. Respects `prefers-reduced-motion`.
- **Imagery:** avatars are simple circular crops; product imagery is incidental.
  Cool/neutral, no heavy grain or filters.
- **Cards:** white surface, 1px gray-200 border, `shadow-sm`, 14px radius, 24px
  padding, header (title + muted description) / content / footer rhythm.

---

## ICONOGRAPHY

- **Icon set:** **Lucide** (`lucide-react` / lucide), the canonical shadcn icon
  library. Outline style, **2px stroke**, round caps & joins, 24×24 viewbox,
  typically rendered at **16px** inline (1rem) and 20px in nav.
- **Color:** icons inherit `currentColor` — muted-foreground in rest state,
  foreground/primary when active or inside a colored button.
- **Delivery:** this kit links Lucide from CDN (`https://unpkg.com/lucide@latest`)
  in UI kits, or inlines small SVGs that match Lucide's geometry (e.g. the chevron
  in `Select`, the check in `Checkbox`). When building, prefer real Lucide icons
  over hand-drawn SVG.
- **Emoji:** never used as iconography.
- **Unicode:** occasional ⌘/⏎ glyphs appear in keyboard hints (`Kbd`), set in Geist
  Mono.

---

## INDEX / MANIFEST

Root:
- `styles.css` — global entry point (import this one file). `@import`s the tokens.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills-compatible entry for downloading this system.

`tokens/`
- `fonts.css` — Inter / Geist / Geist Mono (Google Fonts).
- `colors.css` — base ramps + light & dark semantic tokens (OKLCH).
- `typography.css` — font families, scale, `.prizm-*` prose helpers.
- `spacing.css` — 4px spacing scale, radius scale, control heights.
- `effects.css` — shadow scale, focus ring, motion tokens.
- `base.css` — minimal reset + document defaults.

`guidelines/` — foundation specimen cards (Design System tab): colors, type,
spacing, radius, elevation.

`components/` — reusable React primitives (bundled, exposed on
`window.PRIZMDesignSystem_45a1b2`):
- `actions/` — **Button**, **Badge**, **Avatar**
- `forms/` — **Input**, **Textarea**, **Label**, **Select**, **Switch**, **Checkbox**
- `display/` — **Card** (+ Header/Title/Description/Content/Footer), **Alert**,
  **Tabs**, **Separator**, **Table** (+ Header/Body/Row/Head/Cell)

`ui_kits/` — full-screen product recreations:
- `application/` — dashboard shell (sidebar + stat cards + payments table)
- `auth/` — create-account / sign-in screen

`templates/` — copy-to-start Design Components consuming projects can seed from:
- `auth/` — `Auth.dc.html` centered sign-up / sign-in card
- `dashboard/` — `Dashboard.dc.html` header + KPI stat cards + payments table

Each template loads the system via its `ds-base.js` and mounts PRIZM components
with `<x-import component-from-global-scope="PRIZMDesignSystem_45a1b2.…">`.

---

## Caveats

- Fonts load from **Google Fonts** (Inter, Geist, Geist Mono are the exact faces —
  no substitution, but not self-hosted binaries).
- The Figma logo is a **placeholder** ("Logomarca" + generic mark); PRIZM has no
  distinct logo in the file, so this kit uses a simple text wordmark.
- Theme values are reconstructed from the shadcn/Tailwind model and the Figma's
  rendered Theme Preview, not from a live Grupo Itss codebase.
