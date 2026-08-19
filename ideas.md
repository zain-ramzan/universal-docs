# UniversalDocs Design Exploration

## Three Possible Directions

### Theme Name: The Civic Archive

**Very Brief Intro:** A composed public-library atmosphere: warm paper surfaces, disciplined typography, and useful tooling without enterprise-dashboard stiffness. It makes document stewardship feel calm and capable.

**Probability:** 0.07

### Theme Name: Field Desk

**Very Brief Intro:** A contemporary portable workbench inspired by a well-used studio desk: tactile paper tones, labelled rails, and quick action panels. It turns private document work into a reassuring, immediately legible practice.

**Probability:** 0.04

### Theme Name: Clearroom

**Very Brief Intro:** A bright, highly reduced workspace built around white space, cool gray architecture, and one decisive signal color. It feels fast, clinical, and technologically quiet.

**Probability:** 0.09

## Chosen Approach: Field Desk

### Design Movement

**Field Desk** interprets contemporary editorial and utilitarian product design through the lens of a personal document workbench. It combines the considered hierarchy of a print desk with the restraint and speed of high-quality system software.

### Core Principles

1. **A workspace, not a dashboard:** The interface is organised like a practical desk with an anchored tool rail, a live paper stack, and clear secondary tools.
2. **Privacy made tangible:** Local-first status is visible as a quiet material detail, not a marketing claim or an intimidating technical warning.
3. **Strong information rhythm:** Large purposeful headings, small labels, and deliberate whitespace clarify what to do next.
4. **Tooling with restraint:** Controls use crisp outlines and measured color accents; every visual element earns its place.

### Color Philosophy

An oat-paper base feels familiar and non-institutional, while near-black ink provides high-contrast reading comfort. A saturated persimmon signal color marks creation, scanning, and privacy-positive confirmation; leaf green identifies local-device status. The interface avoids generic product blue as the main emotional language.

### Layout Paradigm

The app uses a **desk-and-rail** structure rather than a centered dashboard. A narrow persistent rail holds navigation and mode status; the main pane is a loose composition of a headline strip, a prominent action ledger, and document stacks that are intentionally left-aligned. On mobile, the rail resolves into a bottom dock while action cards remain dominant.

### Signature Elements

1. A slim **indexed rail** with a vertical local-storage marker.
2. **Paper-stack document cards** with offset metadata strips and realistic, subtle elevation.
3. A **persimmon action tab** that announces the primary working context without gradients.

### Interaction Philosophy

Interactions should feel like handling an organised physical desk: controls press slightly, selected items acquire a confident ink outline, and actions report their local status clearly. Keyboard actions are immediate; drawers and modal setup views slide with a brief, purposeful motion.

### Animation

Use only transform and opacity animation. Paper cards rise by two pixels on hover and settle on press; drawers enter in 220ms using `cubic-bezier(0.23, 1, 0.32, 1)`; document lists stagger by 40ms when first mounted. Respect `prefers-reduced-motion` by removing non-essential entrances. No continuous decorative animation and no glow effects.

### Typography System

Use **DM Sans** for interfaces and metadata, paired with **Lora** for major contextual headings and short editorial prompts. Headings carry a compact, high-contrast serif presence; functional labels use tracked uppercase DM Sans at small sizes; body copy remains comfortable and direct.

### Brand Essence

**UniversalDocs is the private document workbench for people who want capable tools without surrendering their files.**

**Personality:** grounded, capable, candid.

### Brand Voice

Headlines are concrete and gently affirmative; CTAs are verb-led and specific; microcopy explains what happens locally without euphemism.

Example headline: **Make sense of the paper in front of you.**

Example microcopy: **Saved locally — no account, no upload.**

### Wordmark & Logo

The mark is a bold folded-sheet symbol: two uneven paper planes form an upright, rounded-corner “U” around a small protected dot. It uses a solid persimmon foreground on transparent background, remains recognisable at favicon scale, and is paired with a custom-spaced UniversalDocs wordmark rather than a default font treatment.

### Signature Brand Color

**Persimmon Signal — #D9562B.**

## Style Decisions

- Work surfaces use visible paper-stack offsets, compact metadata strips, or ledger tabs rather than generic rounded SaaS tiles.
- Persimmon Signal `#D9562B` is reserved for active context, creating/scanning work, and primary action tabs.
- The navigation rail behaves like a physical index: a vertical local-storage marker, clipped active tab, and tactile privacy status reinforce the document-desk metaphor.
- Practical document imagery is preferred: scanner surfaces, paper edges, folders, local-storage cues, and tabs take precedence over lifestyle desk styling.
