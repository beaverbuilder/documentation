---
title: REST API
description: Reference for the Beaver Builder AI REST API endpoints under the fl-design-system/v1 namespace.
---

Reference for the Beaver Builder AI REST API endpoints under the fl-design-system/v1 namespace.

## Overview

Beaver Builder AI registers its REST API under the `fl-design-system/v1` namespace. The API primarily serves the plugin's own interfaces; for connecting external AI agents, the supported surface is [MCP](../configuration/mcp-connection.md). The endpoints below are the ones most useful for integration and debugging.

**Base URL:** `{your-site}/wp-json/fl-design-system/v1`

## Authentication and permissions

All endpoints use standard WordPress REST authentication: cookie plus `wp_rest` nonce inside WordPress, or [application passwords](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/) for external access. Endpoints fall into four permission tiers:

| Tier | Requirement |
|------|-------------|
| Content creator | Logged in with the `unfiltered_html` capability, adjustable via the `fl_ds_user_can_create_content` filter. |
| Administrator | The `manage_options` capability. |
| Per-post | The `edit_post` capability for the target post. |
| Public | No authentication. Only the form submission endpoint is public. |

## Error responses

An error middleware formats failures from all routes in the namespace into a single shape:

```json
{
  "error": {
    "code": "validation_error",
    "message": "A label is required.",
    "status": 422,
    "details": {}
  }
}
```

Common codes include `rest_forbidden` (403), `validation_error` (422), `not_found` (404), and `missing_api_key` (400).

## Design systems

Design systems are identified by UUID. Listing is scoped to the user's own systems unless the user has the `edit_others_design_systems` capability; editing and deleting require ownership or that capability.

### List design systems

Returns the design systems visible to the authenticated user. Requires content creator permission.

```http
GET /design-systems
```

### Get a design system

Returns one design system as a flat object. Requires login; the `guidance` and `brief` fields are omitted for users who cannot edit the system.

```http
GET /design-systems/{uuid}
```

```json title="Example response"
{
  "uuid": "a1b2c3d4-...",
  "label": "My Design System",
  "tokens": { "--ds-color-primary": "#2563eb" },
  "reset": "/* reset CSS */",
  "base": "/* base CSS */",
  "js": "/* base JS */",
  "fonts": [ { "family": "Inter", "variants": "wght@400;500;600;700" } ],
  "guidance": "Creative direction...",
  "brief": "Business context...",
  "systemCss": "html { font-size: var(--ds-system-root-font-size); }",
  "createdAt": "2026-01-15T10:00:00Z",
  "updatedAt": "2026-02-01T09:30:00Z"
}
```

### Create a design system

Creates a design system. Requires content creator permission. All fields except `label` are optional.

```http
POST /design-systems
```

| Body parameter | Type | Required | Description |
|---|---|---|---|
| `label` | string | Yes | The display name of the design system. |
| `tokens` | object | No | A map of token names to values, for example `"--ds-color-primary": "#2563eb"`. |
| `reset` | string | No | The reset CSS layer. |
| `base` | string | No | The shared base CSS layer. |
| `js` | string | No | Shared base JavaScript. |
| `fonts` | array | No | Font entries as `{ family, variants }` objects. |
| `guidance` | string | No | Creative direction text the AI reads when generating. |
| `brief` | string | No | Business context text. |

### Update a design system

Updates the given fields on a design system. Uses the same body fields as create; include only what you want to change.

```http
PUT /design-systems/{uuid}
```

### Delete a design system

Deletes a design system. Requires ownership or `edit_others_design_systems`.

```http
DELETE /design-systems/{uuid}
```

### Set the site default

Sets the site default design system. Administrators only.

```http
PUT /default-design-system
```

| Body parameter | Type | Required | Description |
|---|---|---|---|
| `uuid` | string | Yes | The UUID of the design system to make the default. |

### Usage and related posts

Two read endpoints report where design systems are used. `GET /design-system-usage` returns per-system post counts grouped by post type, and `GET /design-systems/{uuid}/posts` lists the posts referencing one system.

## Chat history

Conversations are stored per user, per editor surface, per post. `{type}` identifies the surface and `{id}` is the post ID.

```http
GET /chat/{type}/{id}
POST /chat/{type}/{id}
DELETE /chat/{type}/{id}
```

`GET` returns the stored conversation (messages, summary, and state). `POST` saves it, and `DELETE` clears it. All three require content creator permission.

## Generation jobs

The built-in assistant runs AI calls as background jobs. A client starts a job, then polls for streamed output:

```http
POST /generate            Start a job
GET /generate/{job_id}    Poll for streamed output
DELETE /generate/{job_id} Cancel a job
GET /providers            List configured providers and their models
```

Generation is rate limited per user (30 requests per minute, 3 concurrent jobs) and subject to the per-user credit quota; see [AI assistant](../ai-assistant.md#credits-and-limits).

## Usage

Two read endpoints report AI token consumption:

```http
GET /usage        Aggregated token usage (administrators only)
GET /my-credits   The current user's credit tier, usage, and limit
```

## Form submission

The public endpoint the form runtime posts to. This is the only endpoint that requires no authentication.

```http
POST /form-submit
```

| Body parameter | Type | Required | Description |
|---|---|---|---|
| `block_id` | string | Yes | The ID of the block containing the form. |
| `form_key` | string | No | The stable key of the form's settings entry. Preferred; `form_id` (the form element's id) is accepted as a fallback. |
| `fields` | object | Yes | Submitted values keyed by field name. |
| `_fl_hp` | string | No | Honeypot field. Must be empty; the runtime includes it automatically. |
| `_fl_ts` | string | No | Signed time-trap token embedded in the rendered form. Expires 1 hour after render. |

```json title="Success response"
{
  "success": true,
  "redirect": "https://example.com/thanks",
  "redirect_delay": 0
}
```

```json title="Failure response"
{
  "success": false,
  "errors": {
    "_form": "Something went wrong. Please try again."
  }
}
```

## Page overrides

Reads and writes a page's design system reference and page-level CSS and JavaScript. Requires `edit_post` for the target post; writing `pageCss` or `pageJs` additionally requires `unfiltered_html`.

```http
GET /page-overrides/{post_id}
POST /page-overrides/{post_id}
```

| Body parameter | Type | Required | Description |
|---|---|---|---|
| `dsRef` | string | No | The UUID of the design system to assign, or `none` to opt the page out. |
| `pageCss` | string | No | CSS applied to this page only, loaded after the design system CSS. |
| `pageJs` | string | No | JavaScript applied to this page only. |

## Design kits

Kit endpoints power the import wizard, starter kits, and downloads. All require content creator permission.

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/design-kits/analyze` | Analyze an uploaded kit zip and return its contents. |
| POST | `/design-kits/import` | Import an uploaded kit zip. |
| GET | `/design-kits/download` | Download a kit zip. Pass `uuid` to export a design system; omit it for the blank kit. |
| GET | `/design-kits` | List the bundled starter kits. |
| GET | `/design-kits/{id}/preview` | Render page previews for a bundled kit. |
| GET | `/design-kits/{id}/download` | Download a bundled kit as a zip. |
| POST | `/design-kits/{id}/pages` | Create a draft page from a bundled kit template. |

## Pages

HTML-based page import and export, used by the kit pipeline and MCP:

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/pages` | Create a page from an HTML document. |
| GET | `/pages/{id}` | Export a page as HTML. |
| PUT | `/pages/{id}` | Update a page from HTML. |

## Internal endpoints

The namespace also contains endpoints that exist solely for the plugin's own UI and services: `/settings` and `/settings/*` (settings reads, writes, and key tests), `/builder/*` (Beaver Builder layout and module operations used by the chat tools), `/media/*` (Unsplash search and uploads for the assistant), `/providers/openrouter/refresh`, `/debug/{post_id}`, and `/mcp-oauth/*` (cloud connection lifecycle). These are not designed for third-party integration and may change without notice.

MCP tools are not REST routes in this namespace; they are registered through the WordPress Abilities API and served by the MCP Adapter plugin. See [MCP connection](../configuration/mcp-connection.md).
