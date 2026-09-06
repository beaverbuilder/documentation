---
title: Forms
description: Build forms with the Beaver Builder AI assistant and configure submission actions including email notifications, webhooks, redirects, and custom handlers.
---

Build forms with the Beaver Builder AI assistant and configure submission actions including email notifications, webhooks, redirects, and custom handlers.

## How forms work

Forms in Beaver Builder AI are part of modules, not a separate form builder. When the AI assistant generates a module containing a `<form>` element, the plugin detects the form and adds submission settings for it to the module's settings panel. No third-party form plugin is required.

A form has three parts:

- **Form markup**. The fields, labels, and submit button, generated as part of the module's HTML template.
- **Submission actions**. One or more actions that run when a visitor submits the form.
- **Form runtime**. A small script bundled with the plugin that submits the form in the background and applies spam protection. It loads automatically on any page containing a form with a configured action.

## Creating a form

Describe the form you want in the AI assistant and it generates the markup, styling, and field structure as a module:

> Create a contact form with name, email, phone, and message fields

> Build a registration form for a workshop with first name, last name, email, and a session selection dropdown

> Add a newsletter signup form with just an email field and a subscribe button

New forms start with no submission handling. The form renders as plain HTML until you configure an action in the module's settings.

### Supported fields

Forms can contain standard HTML form controls. The runtime submits values from:

- Text-style inputs, including email, phone, URL, password, number, date, and time types.
- Textareas for multi-line input.
- Select menus, both single and multiple choice.
- Radio button groups.
- Checkboxes. A single checkbox submits as true or false; repeated checkboxes sharing one name submit as a list of the checked values.

File upload fields are not supported. A file input in the markup is ignored when the form is submitted.

## Configuring submission actions

Select the form's module on the canvas and open its settings to find the form submission settings. You can add multiple actions to a single form and drag to reorder them. Actions run independently, so one action failing does not stop the others.

### Email

The email action sends a notification for each submission. It has three settings:

- **To**. The recipient email address. Defaults to the site admin email.
- **From**. An optional sender address.
- **Subject**. The subject line, which defaults to `New submission from {form_title}`. Supports the placeholders `{form_title}`, `{form_id}`, and `{admin_email}`.

The email body is generated automatically and lists each submitted field as a label and value pair.

### Webhook

The webhook action sends the submission to an external URL. It has three settings:

- **URL**. The endpoint to call. Must be an `http` or `https` URL. Destinations that resolve to private or internal network addresses are rejected.
- **Method**. `POST` (default), which sends a JSON body, or `GET`, which appends the data as a query parameter.
- **Headers**. Optional custom HTTP headers, for example for authentication.

The JSON payload contains the module ID, form key, form ID, and a `fields` object with all submitted values keyed by field name.

### Redirect

The redirect action sends the visitor to another URL after a successful submission, which is the standard way to show a thank-you page. It has two settings:

- **URL**. An absolute `http` or `https` URL, or a root-relative path such as `/thanks`.
- **Delay**. An optional wait before navigating, from 0 to 30 seconds.

The redirect only fires when every other action on the form succeeds.

### Custom handler

The custom handler action fires a WordPress hook your own code can listen to. Enter a hook slug in the action settings, and the plugin fires `fl_ds_form_custom/{your-slug}` on each submission. See [Form hooks](../developer/hooks.md#form-hooks) for the hook signature and an example.

## Validation

Field validation happens in the browser before the form submits. Required fields, email format, and other HTML constraints come from the form markup, so ask the AI to mark fields as required or use specific input types when you create the form. The server does not re-validate individual field values.

## Spam protection

Every form with a configured action is protected automatically, with nothing to set up:

- A hidden honeypot field silently discards bot submissions that fill it in.
- A signed time-trap token rejects submissions sent less than 2 seconds or more than 1 hour after the page was rendered.
- Rate limiting allows 30 submissions per 10 minutes per logged-in user or visitor IP address.
- A duplicate-submission guard ignores identical repeat submissions within 30 seconds.

:::note
The time-trap token embedded in the page expires after 1 hour. If you use a full-page caching plugin, exclude pages containing forms from caching or keep the cache lifetime under an hour, otherwise visitors served an old cached copy cannot submit the form.
:::

## Success and error behavior

The form runtime submits in the background without a page reload and updates the form to show the result:

- While sending, the submit button is disabled and reads "Sending…".
- On success, the form fields clear and the button reads "Sent". Add a redirect action to send visitors to a thank-you page instead.
- On failure, the button is re-enabled so the visitor can retry. The error message appears in an element the module marks as its error message area, or in a small notice injected before the submit button.

For custom success behavior such as revealing a thank-you panel or firing analytics, listen for the events the runtime dispatches on the form element: `fl:form:submitting`, `fl:form:success`, and `fl:form:error`.

```js
document.getElementById( 'signup-form' ).addEventListener( 'fl:form:success', () => {
    // Reveal a thank-you panel, redirect, or fire analytics.
} );
```
