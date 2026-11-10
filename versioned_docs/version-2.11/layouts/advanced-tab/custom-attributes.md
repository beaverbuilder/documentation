---
id: custom-attributes
title: Custom Attributes
sidebar_label: Custom Attributes
description: The Custom Attributes section in the Advanced tab lets you add custom HTML attributes to any row, column, or module, giving you more control over markup for accessibility, tracking, styling, and custom integrations.
---

The Custom Attributes section in the Advanced tab lets you add custom HTML attributes to any row, column, or module, giving you more control over markup for accessibility, tracking, styling, and custom integrations.

## Custom attributes

The **Custom Attributes** section in the Advanced tab lets you add custom HTML attributes to any row, column, or module, giving you more control over markup for accessibility, tracking, styling, and custom integrations.

### Attribute(s)

Adds one or more HTML attributes to the node. Click the **Add** button to add each attribute.

:::note

The **Target** and **Selector** fields are only available for modules. Rows and columns only support the **Wrapper** target.

:::

<details>
<summary>Attribute fields</summary>

#### Key

The HTML attribute name. Must start with a lowercase letter and can contain lowercase letters, numbers, periods (`.`), underscores (`_`), colons (`:`), and hyphens (`-`). Invalid keys are skipped on output.

For example, entering `foo` as the key outputs an attribute like this in the HTML:

```html
<div foo="bar"></div>
```

#### Value

The attribute value. Values are automatically HTML-escaped on output.

For example, entering `bar` as the value sets the attribute’s value like this:

```html
<div foo="bar"></div>
```

If the value contains special characters, they are automatically escaped in the HTML output:

```html
<div foo="bar &amp; baz"></div>
```

#### Target, Modules Only

Default: `Wrapper`

Selects where the attribute is applied.

- **Wrapper:** Applies the attribute to the element's outer wrapper.
- **Custom:** Applies the attribute to an inner element matched by the **Selector** field.

<details>
<summary>Selector, Custom Target Only</summary>

#### Selector, Custom Target Only

A CSS selector targeting an inner element within the module. Supports tag names, IDs, classes, the child combinator (`>`), and the wildcard (`*`).

</details>

</details>

<details>
<summary>Examples</summary>

#### Wrapper target example

Adding a `data-section` attribute with value `hero` to a row:

```html
<div class="fl-row fl-node-abc123" data-section="hero">
  <!-- row content -->
</div>
```

#### Custom target example

Adding `aria-label` with value `Navigation links` to a module, targeting the selector `ul`:

```html
<div class="fl-module fl-module-menu fl-node-xyz789">
  <ul aria-label="Navigation links">
    <!-- list items -->
  </ul>
</div>
```

</details>
