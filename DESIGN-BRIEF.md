# Design Brief — Personal site

> Confirmed direction from `/impeccable shape`, revised after the persona correction. Strategic context lives in [PRODUCT.md](PRODUCT.md). Hand to `/impeccable craft` per surface.

**Owner / wordmark:** Gregory Johnson Jr.
**Who he is:** Humanities scholar — PhD student in Spanish (University of Iowa), bilingual educator, emerging public/digital humanist. **People-focused. Not a software engineer.**
**Framework:** Astro · **Fidelity:** mid-fi, iterate to polish · **Register:** brand

## 1 · Summary
A personal academic portfolio that presents Gregory as a scholar-educator whose work connects literature, culture, language, and people. It showcases real projects (course design, public-humanities research, scholarly events), conveys his teaching, and gives a clear, human picture of who he is.

## 2 · Primary action
**Explore the work** — funnel visitors into the projects, above all the flagship Spanish writing course. Secondary: understand his teaching. Tertiary: get in touch.

## 3 · Design direction — "warm cinematic" (unchanged)
A warm near-black canvas (a late-night study, not a cold terminal), literary serif, characterful display, dialed to confident-but-composed. Suits a Spanish-literature scholar even better than the original framing. Warmth carried by surface temperature + coral + type, never a cream background; depth from surface lightness, not shadow.

- **Color:** Committed, dark, warm-environmental. Recast meaning: **cobalt = scholarship/depth**, **coral = people/warmth**. Tokens unchanged: bg `oklch(0.16 0.012 65)`, surface `oklch(0.205 0.014 65)`, ink `oklch(0.93 0.012 80)`, muted `oklch(0.77 0.014 75)`, cobalt `oklch(0.74 0.13 240)`, coral `oklch(0.74 0.16 40)`.
- **Type:** Young Serif (display) · Spectral (reading) · Hanken Grotesk (UI). Literary, warm, avoids the Fraunces/Cormorant reflex. Fonts must render Spanish diacritics + `¿ ¡ ñ`.
- **References:** literary-scholarly warmth over tech minimalism; think a well-set humanities journal that learned restraint from A24 — not a dev portfolio.

## 4 · Scope
Mid-fi first, whole site, real navigable pages, composed motion. Bilingual content marked with `lang="es"`.

## 5 · Architecture (revised IA)
- **Home** — hero (people-focused scholar) → featured projects → teaching glimpse → about glimpse → contact.
- **Projects** (index) + **case studies** — the real work:
  1. *Fundaciones de la Escritura en Español: Edición futbolera* (flagship — Spanish writing course using fútbol as a lens; built from **his own words**, lightly corrected).
  2. Iowa library-advocacy strategy (public humanities / policy research).
  3. SLU-Madrid Spanish symposium (scholarly events / outreach).
- **Teaching** — courses taught + pedagogy, grounded in his CV and the course philosophy.
- **About** — bio, education, research interests, languages, the human story.
- **Contact** — footer (real email: Gjj7100@outlook.com; Iowa City; Dept. of Spanish & Portuguese).

The previous software "Writing" blog and invented essays are removed.

## 6 · Key states
Default · sparse-by-design (a small, real set of projects must look intentional) · first-visit (land "humanities scholar + educator, people-focused" in one glance) · 404 (on-voice) · image slots degrade to type (no real photo yet → monogram portrait, swappable).

## 7 · Interaction & motion
Quiet persistent nav (Projects / Teaching / About / Get in touch). Composed page-load reveal, restrained hover, no fade-on-scroll-every-section, `prefers-reduced-motion` safe.

## 8 · Content
First-person, warm, articulate, people-centered, bilingual sensibility. Preserve his writing (the course); correct only glaring errors. Use real CV facts. Spanish passages marked `lang="es"`.

## 9 · Build references
`typeset.md` · `layout.md` · `animate.md` · `colorize.md` · `harden.md`/`onboard.md`.

## 10 · Settled decisions
- **Name/wordmark:** Gregory Johnson Jr. (matches the course author line).
- **Framework:** Astro. **Contact:** real email. **Photo:** monogram placeholder until he provides one.
- **Visual system retained**; only persona, content, and IA changed.
