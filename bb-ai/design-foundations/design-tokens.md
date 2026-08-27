---
title: Design tokens
description: Define and manage design tokens in Beaver Builder AI to keep colors, fonts, spacing, and other values consistent across your design system.
---

Define and manage design tokens in Beaver Builder AI to keep colors, fonts, spacing, and other values consistent across your design system.

## How tokens work

Design tokens are named CSS custom properties that store your design system's core values: colors, fonts, spacing scales, and more. Tokens give the AI assistant a vocabulary it uses to generate consistent output. When you ask the AI to "use the primary color" or "apply the heading font," it reads your tokens to find the correct values.

All tokens follow the `--ds-{category}-{name}` pattern and are declared in a single `:root` block in the design system's stylesheet:

```css
:root {
  --ds-color-primary: #2563eb;
  --ds-color-surface: #ffffff;
  --ds-font-heading: 'Inter', sans-serif;
  --ds-space-md: 1.5rem;
  --ds-text-base: 1rem;
}
```

The `--ds-` prefix identifies tokens as belonging to the design system. System tokens use the `--ds-system-` prefix and control plugin behavior; see [System tokens](#system-tokens).

## Standard token categories

The AI follows a standard set of token categories when it creates or extends a design system. Five categories are expected in every system, and the AI defines them when it generates a new design.

### Colors (`--ds-color-`)

All colors used in the design system. A typical set includes:

| Token | Purpose |
|-------|---------|
| `--ds-color-primary` | Primary brand color for buttons, links, and accents. |
| `--ds-color-secondary` | Secondary brand color. |
| `--ds-color-surface` | Background color for cards and containers. |
| `--ds-color-text` | Default body text color. |
| `--ds-color-accent` | Accent color for highlights and decorative elements. |

### Fonts (`--ds-font-`)

Font family values for each type role, with fallback stacks such as `'Inter', system-ui, sans-serif`:

| Token | Purpose |
|-------|---------|
| `--ds-font-heading` | Font family for headings. |
| `--ds-font-body` | Font family for body text. |
| `--ds-font-mono` | Font family for code and monospaced text. |

### Spacing (`--ds-space-`)

A spacing scale for margins, padding, and gaps:

| Token | Example value |
|-------|--------------|
| `--ds-space-xs` | `0.25rem` |
| `--ds-space-sm` | `0.5rem` |
| `--ds-space-md` | `1rem` |
| `--ds-space-lg` | `2rem` |
| `--ds-space-xl` | `4rem` |
| `--ds-space-section` | `6rem` |

### Text sizes (`--ds-text-`)

A type scale for font sizes:

| Token | Example value |
|-------|--------------|
| `--ds-text-xs` | `0.75rem` |
| `--ds-text-sm` | `0.875rem` |
| `--ds-text-base` | `1rem` |
| `--ds-text-lg` | `1.125rem` |
| `--ds-text-xl` | `1.25rem` |
| `--ds-text-2xl` | `1.5rem` |

### Font weights (`--ds-weight-`)

Font weight values for each weight role. The plugin loads weights 400, 500, 600, and 700 for each Google Font by default, and every weight token should match a weight your fonts actually load:

| Token | Value |
|-------|-------|
| `--ds-weight-regular` | `400` |
| `--ds-weight-medium` | `500` |
| `--ds-weight-semibold` | `600` |
| `--ds-weight-bold` | `700` |

Add `--ds-weight-light` (`300`) or heavier weights only when the design uses them and the font selection includes those weights.

## Optional token categories

Use these categories when your design needs them:

| Category | Prefix | Purpose |
|----------|--------|---------|
| Border radius | `--ds-radius-` | Corner radius values. |
| Shadows | `--ds-shadow-` | Box shadow definitions. |
| Transitions | `--ds-transition-` | Duration and easing values. |
| Line heights | `--ds-line-` | Line height scale. |
| Letter spacing | `--ds-letter-` | Letter spacing values. |
| Max widths | `--ds-width-` | Container and max-width values. |

## System tokens

System tokens use the `--ds-system-` prefix, control plugin-level behavior, and are added automatically when a design system is created. There is currently one system token:

| Token | Default | Effect |
|-------|---------|--------|
| `--ds-system-root-font-size` | `16px` | Sets `html { font-size: ... }` on pages using this system. |

## Managing tokens

### Using the token editor

Tokens are edited from the page editor's design system panel. In Beaver Builder, choose **Design System** from the Tools menu or press **Shift+D**; in the block editor, open the AI chat panel and click the palette icon to switch to the **Design** tab. The **Tokens** sub-tab lists every token with editable values, and in Beaver Builder the panel works even with the AI chat disabled.

Token changes apply to every page using the design system. The design system's detail page in the admin also shows the tokens, but as a read-only preview.

### Using the AI assistant

The AI assistant can create and modify tokens through conversation. Example prompts:

- "Add a `--ds-color-muted` token with value `#6b7280`"
- "Update the primary color to `#1d4ed8`"
- "Add a full spacing scale from xs to 2xl"

The assistant proposes the change, and accepting a change to a token that is already in use asks for confirmation first, since it restyles everything referencing that token.

### Using tokens in blocks and CSS

Reference tokens with the CSS `var()` function:

```css
.card {
  background: var(--ds-color-surface);
  padding: var(--ds-space-md);
  font-family: var(--ds-font-body);
  font-size: var(--ds-text-base);
}
```

The AI generates block CSS this way automatically. When you edit CSS by hand, use `var(--ds-...)` references rather than hardcoded values so that changing a token updates everything that uses it.

In Beaver Builder, design system colors also appear in the native color picker, so standard Beaver Builder modules can bind to your tokens too. Editing a token then recolors every module that uses it.
