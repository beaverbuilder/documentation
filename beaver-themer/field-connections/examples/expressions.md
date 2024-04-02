---
id: expressions
title: Expression Examples
sidebar_label: Expression Examples
---

This article provides examples of practical uses for expressions in your field connections, demonstrating how to effectively incorporate them with WordPress data, WordPress custom fields, and Advanced Custom Fields.

## Equals

Below are some examples that showcase the practical use of the `equals` operator:

### Show Content Based on Author Name

In this example, we're using the `equals` operator to check whether the authors name has a specific value in this case **Beaver Builder**. If the statement is `TRUE`, the content inside the shortcode will display. If the statement is `FALSE` meaning the authors name isn't **Beaver Builder**, but something else, then no content will return.

```markup
[wpbb-if post:author_name exp='equals' value='Beaver Builder']

  <p>This content will only display if the author name is Beaver Builder.</p>

[/wpbb-if]
```

### Style elements based on Post Type

In this example, the [Post Type](../wordpress-data.md#post-type) field connection is utilized to style elements based on the post type. In this example, we are styling the post title differently based on the post type when a Post module is set up to showcase multiple post types within the same module.

```markup
[wpbb-if post:post_type display='slug' exp='equals' value='post']

  <h2 style="color: green;">[wpbb post:title]</h2>

[wpbb-else]

  <h2 style="color: black;">[wpbb post:title]</h2>

[/wpbb-if]
```

:::tip

You can replace `value='post'` with the slug of your chosen post type or custom post type. For instance, `value='movies'`.

:::

### Style Specific Taxonomy

In this example, we're using the equals operator to check whether the post has a specific taxonomy term assigned to it called **New**. If the statement is `TRUE`, the **New** tag will be styled with a red background and white text. If the statement is `FALSE` meaning the post doesn't have the taxonomy term assigned, then no styling will return.

This is a great way to style specific taxonomy terms differently than others.

**Tag Name:** New

```markup
[wpbb-if post:terms_list taxonomy='post_tag' exp='equals' value='New']

  <span style="background: red; color: white; padding: 2px 4px;">New</span>

[/wpbb-if]
```

#### Output

> <span style={{ background: "red", color: "white", padding: "2px 4px" }}>New</span>

### Hide End Date for All Day Events

In this example, we're using the `equals` expression to check whether the event's end date is the same day as the start date. If the statement is `true`, only the start date displays. If the statement is `false` meaning the start date and end date do not match, both the start date and end date display.

```markup
[wpbb-if post:the_events_calendar_start_date exp='equals' value='[wpbb post:the_events_calendar_end_date']']

  <p><strong>Date:</strong> [wpbb post:the_events_calendar_start_date format='']</p>

[wpbb-else]

  <p><strong>Date:</strong> [wpbb post:the_events_calendar_start_date format=''] - [wpbb post:the_events_calendar_end_date format='']</p>

[/wpbb-if]
```

## Not Equals

Below are some examples that showcase the practical use of the `notequals` operator:

### Display Categories, Hide Uncategorized

This example utilizes the "terms_list" field connection to display all categories assigned to a post. By using the `notequals` operator, it checks for the existence of the **"uncategorized"** category and, if `TRUE`, excludes it from displaying.

This is a great way to hide specific taxonomy terms from displaying, such as **Uncategorized**.

```markup
[wpbb-if post:terms_list taxonomy='category' exp='notequals' value='uncategorized']

  [wpbb post:terms_list taxonomy='category' html_list='no' display='name' separator=', ' limit='' linked='yes']

[/wpbb-if]
```

## Contains

Below are some examples that showcase the practical use of the `contains` operator:

### Display Extra Content Based on Post Title

In this example, we're using the `contains` operator to check whether the post title contains a specific value in this case **What's New**.

If the statement is `TRUE`, meaning any post that has a title containing the words **What's New**, such as **What's New in Beaver Builder 2.8**, a Font Awesome icon will prefix the post title. If the statement is `FALSE` meaning the post title doesn't contain **What's New**, then no Font Awesome icon will display.

```markup
[wpbb-if post:title exp='contains' value='What’s New']

  <h3><i class="fa-solid fa-sparkles"></i> [wpbb post:title]</h3>

[wpbb-else]

  <h3>[wpbb post:title]</h3>

[/wpbb-if]
```

#### Output

> <i className="fa-solid fa-sparkles"></i> What's New in Beaver Builder 2.8

## Greater

Below are some examples that showcase the practical use of the `greater` operator:

### Test for Value of ACF Number Field using Greater

The following example uses the ACF number field along with the `greater` operator and a comparison value of `500`. If the field value is greater than **500** then the statement is `TRUE` and will return the **TRUE** markup in the example.

**Field Value:** 501

```markup
[wpbb-if post:acf type='number' name='FIELD_NAME' exp='greater' value='500']

  TRUE: The ACF Number field FIELD_NAME value is greater than 500.<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME']

[wpbb-else]

  FALSE: The ACF Number field FIELD_NAME value isn't greater than 500. .<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME'].

[/wpbb-if]
```

#### Output

> TRUE: The ACF Number field FIELD_NAME value is greater than 500.
> The number field value is 501.

## Greater Equals

### Test for Value of ACF Number Field using Greater Equals

The following example uses the ACF number field along with the `greaterequals` operator with a comparison value of `100`. If the field value is equal to or greater than 100 then the statement is `TRUE` and will return the **TRUE** markup from the example.

**Field Value:** 100

```markup
[wpbb-if post:acf type='number' name='FIELD_NAME' exp='greaterequals' value='100']

  TRUE: The ACF Number field FIELD_NAME value is equal to or greater than 100.<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME']

[wpbb-else]

  FALSE: The ACF Number field FIELD_NAME value is less than 100.<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME'].

[/wpbb-if]
```

#### Output

> TRUE: The ACF Number field FIELD_NAME value equal to or greater than 100.
> The number field value is 100.

## Less

### Test for Value of ACF Number Field using Less

The following example uses the ACF number field along with the `less` operator with a comparison value of `100`. If the field value is less than 100 then the statement is `TRUE` and will return the **TRUE** markup in the example.

**Field Value:** 50

```markup
[wpbb-if post:acf type='number' name='FIELD_NAME' exp='less' value='100']

  TRUE: The ACF Number field FIELD_NAME value is less than 100.<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME']

[wpbb-else]

  FALSE: The ACF Number field FIELD_NAME value isn't less than 100. .<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME'].

[/wpbb-if]
```

#### Output

> TRUE: The ACF Number field FIELD_NAME value is less than 100.
> The number field value is 50.

## Less Equals

### Test for value of ACF number field

The following example uses the ACF number field along with the `lessequals` operator with a comparison value of `100`. If the field value is equal to or less than 100 then the statement is `TRUE` and will return the **TRUE** markup in the example.

**Field Value:** 90

```markup
[wpbb-if post:acf type='number' name='FIELD_NAME' exp='lessequals' value='100']

  TRUE: The ACF Number field FIELD_NAME value is equal to or less than 100.<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME']

[wpbb-else]

  FALSE: The ACF FIELD_NAME field isn't equal to or less than 100. .<br>
  The number field value is [wpbb post:acf type='number' name='FIELD_NAME'].

[/wpbb-if]
```

#### Output

> True: The ACF number_value field is equal to or less than 100.
> The number field value is 90.
