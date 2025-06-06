---
id: conditionals
title: Conditionals
sidebar_label: Conditionals
---

The Field Connections shortcode syntax supports conditionals, allowing you to display dynamic content based on the evaluation of statements as `TRUE` or `FALSE`. This functionality is available for all Beaver Themer field connection shortcodes, including Advanced Custom Fields (ACF), BigCommerce, Easy Digital Downloads, The Events Calendar, and WooCommerce.

## Statements

The conditional shortcode syntax supports three statements: `if`, `if not`, and `else`.

### If `[wpbb-if]`

The `[wpbb-if]` statement enables you to display custom content if the statement evaluates to `TRUE`.

```markup
[wpbb-if some-field-connection]

  If True, show this!

[/wpbb-if]
```

### Else `[wpbb-else]`

The `[wpbb-else]` statement extends the `[wpbb-if]` statement to display custom content when the `[wpbb-if]` statement evaluates to `FALSE`.

```markup
[wpbb-if some-field-connection]

    If True, show this!

[wpbb-else]

    If False, show this instead!

[/wpbb-if]
```

### If Not `[wpbb-if !]`

The `[wpbb-if !]` statement allows you to display custom content when the statement evaluates to `FALSE`. The exclamation mark `!` functions as the logical operator `NOT`.

```markup
[wpbb-if !some-field-connection]

    If False, show this!

[/wpbb-if]
```

## Limitation

Nested `if` statements are not supported. Meaning you can't place an `if` statement inside another, as shown in the example below. If you need more complex conditional logic, we recommend creating a custom shortcode instead.

```markup
[wpbb-if some-field-connection]

    If True, show this!

    [wpbb-if some-field-connection]

        If also True, show this!

    [/wpbb-if]

[wpbb-else]

    If False, show this instead!

[/wpbb-if]
```
